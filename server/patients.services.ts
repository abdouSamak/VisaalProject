import admin from "firebase-admin";
import QuerySnapshot = admin.firestore.QuerySnapshot;

const db = admin.firestore();

const refPatients = db.collection('patients');

export async function getAllPatients(): Promise<PatientModel[]> {
    const patientQuerySnap: QuerySnapshot = await refPatients.get();
    const patients: PatientModel[] = [];
    patientQuerySnap.forEach(patientSnap => patients.push(patientSnap.data() as PatientModel));
    return patients;
}