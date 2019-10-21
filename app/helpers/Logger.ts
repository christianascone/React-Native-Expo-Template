/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       Logger.ts
 * @author     Christian Ascone
 * @date       10/11/19 12:23 PM
 */


export class Logger {
    /**
     * Builds the log message with class name and date
     * @param {string} className
     * @param {any} message
     * @returns {string}
     */
    private static buildMessage(className: string, message: any) {
        let date = new Date().toLocaleString();
        let toPrint = typeof message == "string" ? message : JSON.stringify(message);
        return `[${date}] [${className}] - ${toPrint}`;
    }

    /**
     * Logs a message
     * @param {string} class_name
     * @param {string} message
     */
    static log(class_name: string, message: string) {
        let logMessage = this.buildMessage(class_name, message);
        console.log(logMessage);
    }

    /**
     * Logs a warn message
     * @param {string} class_name
     * @param {string} message
     */
    static warn(class_name: string, message: string) {
        let date = new Date().toLocaleString();
        console.warn(`[${date}] [${class_name}] - ${message}`);
    }
}