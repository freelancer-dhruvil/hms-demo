export class NotificationModel {
    id: string;                // Unique identifier for the notification
    name: string;              // Name or title of the notification
    description: string;       // Detailed description of the notification
    type: 'info' | 'warning' | 'error' | 'success'; // Type of notification
    status: 'unread' | 'read'; // Read status of the notification
    createdDate: Date;         // Date when the notification was created
    recipientId: string;       // ID of the recipient
    priority?: 'low' | 'medium' | 'high'; // Priority level of the notification
    actions?: NotificationAction[]; // Optional actions associated with the notification

    constructor(
        id: string,
        name: string,
        description: string,
        type: 'info' | 'warning' | 'error' | 'success',
        status: 'unread' | 'read',
        createdDate: Date,
        recipientId: string,
        priority?: 'low' | 'medium' | 'high',
        actions?: NotificationAction[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.status = status;
        this.createdDate = createdDate;
        this.recipientId = recipientId;
        this.priority = priority;
        this.actions = actions;
    }
}

// Additional class for Notification Action (if required)
export class NotificationAction {
    label: string;            // Label for the action button
    actionUrl: string;       // URL to navigate when action is triggered
    actionType: string;      // Type of action (e.g., "navigate", "callback")

    constructor(label: string, actionUrl: string, actionType: string) {
        this.label = label;
        this.actionUrl = actionUrl;
        this.actionType = actionType;
    }
}
