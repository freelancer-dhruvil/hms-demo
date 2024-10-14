export class ScheduleModel {
    // Basic information
    name: string;                     // The name of the person
    department: string;               // The department of the person
    image: string;                    // URL to the person's image
    availableSlots: AvailableSlot[];  // Array of available time slots
    appointments: Appointment[];       // Array of appointments

    constructor(
        name: string,
        department: string,
        image: string,
        availableSlots: AvailableSlot[],
        appointments: Appointment[]
    ) {
        this.name = name;
        this.department = department;
        this.image = image;
        this.availableSlots = availableSlots;
        this.appointments = appointments;
    }
}

// Model for available slots
export class AvailableSlot {
    startTime: Date;                 // Start time of the slot
    endTime: Date;                   // End time of the slot

    constructor(startTime: Date, endTime: Date) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

// Model for appointments
export class Appointment {
    date: Date;                      // Date of the appointment
    startTime: Date;                 // Start time of the appointment
    endTime: Date;                   // End time of the appointment
    with: string;                    // Name of the person the appointment is with
    notes: string;                   // Additional notes for the appointment

    constructor(
        date: Date,
        startTime: Date,
        endTime: Date,
        withPerson: string,
        notes: string
    ) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.with = withPerson;
        this.notes = notes;
    }
}
