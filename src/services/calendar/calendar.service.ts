import {db} from '../../configs/config.firebase';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {CalendarioType, defaultCalendar} from '../../types/calendario';

// trae el calendario completo del usuario.
export const getCalendarByUser = async ({
  uid,
}: {
  uid: string;
}): Promise<CalendarioType> => {
  const docRef = doc(db, 'calendario', uid!);
  return getDoc(docRef)
    .then(docSnap => {
      let agenda: CalendarioType = [];
      if (docSnap.exists()) {
        agenda = docSnap.data().agenda;
      }

      return agenda === null || agenda === undefined || agenda.length === 0
        ? defaultCalendar
        : agenda;
    })
    .catch(error => {
      throw error.parsedError;
    });
};

// Recibe toda la agenda, debido a que la agenda es todo el documento y dentro de este cada item tiene la fecha con las emociones
export const updateCalendarByUser = async ({
  uid,
  agenda,
}: {
  uid: string;
  agenda: CalendarioType;
}) => {
  try {
    await setDoc(doc(db, 'calendario', uid), {agenda}).then().catch();
  } catch (error) {
    throw new Error('Error updateCalendarByUser: ' + error);
  }
};
