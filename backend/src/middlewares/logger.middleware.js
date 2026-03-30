const logger = (req, res, next) => {
    try {
        const method = req.method
        const url = req.originalUrl
        const timestamps = new Date().toISOString()

        res.on("finish", () => {
        const statusCode = res.statusCode;
        console.log(`[${timestamps}] ${method} ${url} ${statusCode}`);
    });
        next()
    } catch (error) {
        console.log("Error :- ", error.message)
        next()
    }
}

export default logger