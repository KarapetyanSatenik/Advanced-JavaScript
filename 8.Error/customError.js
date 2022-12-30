class customError extends Error {
  constructor(message) {
    super(message);
    this.name = customError;
  }
}
throw new customError("hello")

// Now, the tricky part here is that when you throw an error to a user, 
// you don't want to reveal too much information about your system because
// hackers and bad actors might use that information to compromise your system.