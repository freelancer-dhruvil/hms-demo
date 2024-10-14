export class ActivityModel {
    id: string; // Unique identifier for the activity
    userId: string; // User associated with the activity
    action: string; // Description of the action taken
    timestamp: Date; // Date and time of the activity
    status: string; // Current status of the activity (e.g., completed, pending)
    details?: string; // Optional additional details about the activity

    constructor(
        id: string,
        userId: string,
        action: string,
        timestamp: Date = new Date(),
        status: string = 'pending',
        details?: string
    ) {
        this.id = id;
        this.userId = userId;
        this.action = action;
        this.timestamp = timestamp;
        this.status = status;
        this.details = details;
    }
}
