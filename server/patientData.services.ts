import admin from "firebase-admin";
import QuerySnapshot = admin.firestore.QuerySnapshot;

const db = admin.firestore();

const refCaregivers = db.collection('patientData');

export async function getAllpatientData(): Promise<PatientDataModel[]> {
    const patientDataQuerySnap: QuerySnapshot = await refCaregivers.get();
    const patientsData: PatientDataModel[] = [];
    patientDataQuerySnap.forEach(patientDataSnap => patientsData.push(patientDataSnap.data() as PatientDataModel));
    return patientsData;
}