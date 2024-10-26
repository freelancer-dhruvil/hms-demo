export class AppointmentModel {

    appointmentGuid: string;
    reservationGuid: string;

    patientGuid: string;
    patientName: string;
    patientEmailId: string;
    
    doctorGuid: string;
    doctorName: string;
    doctorEmailId: string;

    startDateTime: Date;
    endDateTime: Date;

    treatment: string;
    notes: string;

    statusGuid: string;
    statusName: string;

    constructor(
        appointmentGuid: string, 
        reservationGuid: string,
        patientGuid: string, 
        patientName: string, 
        patientEmailId: string,
        doctorGuid: string, 
        doctorName: string, 
        doctorEmailId: string,
        startDateTime: Date, 
        endDateTime: Date, 
        treatment: string, 
        notes: string,
        statusGuid: string, 
        statusName: string
    ) {
        this.appointmentGuid = appointmentGuid;
        this.reservationGuid = reservationGuid;
        this.patientGuid = patientGuid;
        this.patientName = patientName;
        this.patientEmailId = patientEmailId;
        this.doctorGuid = doctorGuid;
        this.doctorName = doctorName;
        this.doctorEmailId = doctorEmailId;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.treatment = treatment;
        this.notes = notes;
        this.statusGuid = statusGuid;
        this.statusName = statusName;
    }
}