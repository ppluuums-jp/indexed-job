export type Severity =
    | "DEFAULT"
    | "DEBUG"
    | "INFO"
    | "NOTICE"
    | "WARNING"
    | "ERROR"
    | "CRITICAL"
    | "ALERT"
    | "EMERGENCY";
export type Payload = { [key: string]: any };
export type Entry = {
    severity: Severity;
    message: string;
    error?: Error;
    [key: string]: any;
};

export class Logger {
    static log(
        severity: Severity,
        message: string,
        payload?: Payload,
        error?: Error
    ) {
        if (severity === "ERROR" && error) {
            payload = {
                ...payload,
                error: {
                    name: error.name,
                    message: error.message,
                    stack: error.stack,
                },
            };
        }
        const entry: Entry = {
            severity,
            message,
            ...payload,
        };
        console.log(JSON.stringify(entry));
    }
    static debug(message: string, payload: Payload) {
        Logger.log("DEBUG", message, payload);
    }
    static info(message: string, payload: Payload) {
        Logger.log("INFO", message, payload);
    }
    static notice(message: string, payload: Payload) {
        Logger.log("NOTICE", message, payload);
    }
    static warn(message: string, payload: Payload) {
        Logger.log("WARNING", message, payload);
    }
    static error(message: string, payload: Payload, error: Error) {
        Logger.log("ERROR", message, payload, error);
    }
    static critical(message: string, payload: Payload) {
        Logger.log("CRITICAL", message, payload);
    }
    static alert(message: string, payload: Payload) {
        Logger.log("ALERT", message, payload);
    }
    static emergency(message: string, payload: Payload) {
        Logger.log("EMERGENCY", message, payload);
    }
}