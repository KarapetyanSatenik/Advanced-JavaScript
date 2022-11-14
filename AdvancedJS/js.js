'use strict';

const fs = require('fs');
const path = require('path');

async function eventsGenerator(payload) {
  const events = {};
  const owgSports = await readJSONFile(
    path.resolve(__dirname, '../commonCodes/owgSports.json')
  );
  const pwgSports = await readJSONFile(
    path.resolve(__dirname, '../commonCodes/pwgSports.json')
  );
  const owgSportsSpecificCodes = await readJSONFile(
    path.resolve(__dirname, '../commonCodes/sportSpecificCodes.json')
  );
  const gender = await readJSONFile(
    path.resolve(__dirname, '../commonCodes/sportGenders.json')
  );

  const commonData = {
    competitionCode: payload['OdfBody']['$']['CompetitionCode'],
    documentCode: payload['OdfBody']['$']['DocumentCode'],
    owgSports,
    pwgSports,
    gender,
    owgSportsSpecificCodes,
  };
  if (payload['OdfBody']['Competition'][0]['Session']) {
    events.OlympicsSession = generateSessionEvents(
      commonData,
      payload['OdfBody']['Competition'][0]['Session']
    );
  }
  if (payload['OdfBody']['Competition'][0]['Unit']) {
    events.OlympicsUnit = generateUnitEvents(
      commonData,
      payload['OdfBody']['Competition'][0]['Unit']
    );
  }
  return events;
}

async function readJSONFile(path) {
  const response = await fs.readFileSync(path, { encoding: 'utf-8' });
  return JSON.parse(response);
}

function getValueOfGender(commonData, genderId) {
  let gender;
  commonData.gender.find((item) => {
    if (genderId === item.id) gender = item.gender;
  });
  return gender;
}

function getSportType(commonData, sportCodeId) {
  let sportType;
  commonData.competitionCode === 'OWG2022'
    ? commonData.owgSports.find((sport) => {
      if (sportCodeId === sport.sportCode) sportType = sport.sport;
    })
    : commonData.pwgSports.find((sport) => {
      if (sportCodeId === sport.sportCode) sportType = sport.sport;
    });

  return sportType;
}

function getEventStage(commonData, stageId) {
  let eventStage;
  commonData.owgSportsSpecificCodes.find((sport) => {
    if (stageId === sport.code) eventStage = sport.description;
  });
  return eventStage;
}

function generateSessionEvents(commonData, session) {
  const sessionEvents = [];
  session.forEach((session) => {
    const sportType = getSportType(
      commonData,
      session['$']['SessionCode'].substr(0, 3)
    );
    const sessionEventBody = {
      publisherId: 'd90972a3-65a5-447d-ae7b-084b8df9786d',
      clientEventId: session['$']['SessionCode'],
      eventTypeCode: 'OlympicsSession',
      eventBody: {
        code: session['$']['SessionCode'],
        sessionName: session['SessionName']
          ? session['SessionName'][0]['$']['Value']
          : undefined,
        startDate: session['$']['StartDate'],
        endDate: session['$']['EndDate'],
        sessionType: session['$']['SessionType'],
        competition: {
          code: commonData.competitionCode,
          documentCode: commonData.documentCode,
        },
      },
      eventLocation: {
        venue: session['$']['Venue'],
        venueName: session['$']['VenueName'],
      },
      startDate: session['$']['StartDate'],
      endDate: session['$']['EndDate'],
    };
    if (sportType) {
      sessionEventBody.eventBody.sportType = sportType;
    }
    if (session['$']['Medal']) {
      sessionEventBody.eventBody.medal = session['$']['Medal'];
    }
    sessionEvents.push(sessionEventBody);
  });
  return sessionEvents;
}

function generateUnitEvents(commonData, units) {
  const unitEvents = [];

  units.forEach((unit) => {
    const eventStage = getEventStage(
      commonData,
      unit['$']['Code'].substr(22, 4)
    );
    const sportType = getSportType(commonData, unit['$']['Code'].substr(0, 3));
    const gender = getValueOfGender(commonData, unit['$']['Code'][3]);

    const unitEventBody = {
      publisherId: 'd90972a3-65a5-447d-ae7b-084b8df9786d',
      clientEventId: unit['$']['Code'],
      eventTypeCode: 'OlympicsUnit',
      eventStatus: {
        name: unit['$']['ScheduleStatus'],
      },
      eventBody: {
        code: unit['$']['Code'],
        phaseType: unit['$']['PhaseType'],
        sessionCode: unit['$']['SessionCode'],
        startDate: unit['$']['StartDate'],
        endDate: unit['$']['EndDate'],
        eventStatus: {
          name: unit['$']['ScheduleStatus'],
        },
        competition: {
          code: commonData.competitionCode,
          documentCode: commonData.documentCode,
        },
      },
      eventLocation: {
        venueName: unit['VenueDescription']
          ? unit['VenueDescription'][0]['$']['VenueName']
          : undefined,
        locationName: unit['VenueDescription']
          ? unit['VenueDescription'][0]['$']['VenueName']
          : undefined,
      },
      startDate: unit['$']['StartDate'],
      endDate: unit['$']['EndDate'],
    };
    if (gender) {
      unitEventBody.eventBody.gender = gender;
    }
    if (eventStage) {
      unitEventBody.eventBody.eventStage = eventStage;
    }
    if (sportType) {
      unitEventBody.eventBody.sportType = sportType;
    }
    if (unit['$']['Medal']) {
      unitEventBody.eventBody.medal = unit['$']['Medal'];
    }
    if (unit['ItemName']) {
      unitEventBody.eventBody.itemName = unit['ItemName'][0]['$']['Value'];
    }
    if (unit['ItemName'] && eventStage) {
      unitEventBody.eventBody.eventName =
      `${unit['ItemName'][0]['$']['Value']} - ${eventStage}`;
    }
    if (unit['$']['ScheduleStatus'] === 'RESCHEDULED') {
      unitEventBody.eventBody.endDate = unit['$']['ActualEndDate'];
      unitEventBody.endDate = unit['$']['ActualEndDate'];
    } else if (
      unit['$']['ScheduleStatus'] !== 'UNSCHEDULED' &&
      unit['$']['ScheduleStatus'] !== 'CANCELLED'
    ) {
      unitEventBody.eventBody.endDate = unit['$']['EndDate'];
      unitEventBody.endDate = unit['$']['EndDate'];
    }
    if (unit['$']['ScheduleStatus'] === 'RESCHEDULED') {
      unitEventBody.eventBody.startDate = unit['$']['ActualStartDate'];
      unitEventBody.startDate = unit['$']['ActualStartDate'];
    } else if (
      unit['$']['ScheduleStatus'] !== 'UNSCHEDULED' &&
      unit['$']['ScheduleStatus'] !== 'CANCELLED' &&
      unit['$']['ScheduleStatus'] !== 'POSTPONED'
    ) {
      unitEventBody.eventBody.startDate = unit['$']['StartDate'];
      unitEventBody.startDate = unit['$']['StartDate'];
    }
    unitEvents.push(unitEventBody);
  });
  return unitEvents;
}

module.exports = {
  eventsGenerator,
};