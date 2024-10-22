export class RequestModel {
    id: string;                 // Unique identifier for the request
    requestType: string;        // Type of request (e.g., 'Cleaning', 'Maintenance', etc.)
    description: string;        // Description of the request
    status: string; // Current status of the request
    priority: 'low' | 'medium' | 'high'; // Priority level of the request
    createdDate: Date;          // Date when the request was created
    updatedDate?: Date;         // Optional date when the request was last updated
    requestedBy: string;        // Name of the person who made the request
    assignedTo?: string;        // Optional name of the person assigned to handle the request
    location?: string;          // Optional location related to the request
    notes?: string;             // Optional notes for additional information
    icon: string;

    constructor(
        id: string,
        requestType: string,
        description: string,
        status: string,
        priority: 'low' | 'medium' | 'high',
        createdDate: Date = new Date(),
        requestedBy: string,
        icon: string,
        updatedDate?: Date,
        assignedTo?: string,
        location?: string,
        notes?: string
    ) {
        this.id = id;
        this.requestType = requestType;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.requestedBy = requestedBy;
        this.assignedTo = assignedTo;
        this.location = location;
        this.notes = notes;
        this.icon = icon;
    }
}
