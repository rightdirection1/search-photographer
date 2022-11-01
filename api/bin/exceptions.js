class DatabaseError extends Error {
   constructor(message) {
        super(message)
        this.name = "Database Error"
   }
    
}

module.exports = {DatabaseError}