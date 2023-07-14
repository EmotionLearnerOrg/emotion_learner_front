import { db } from '../../configs/config.firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { CalendarioItemType } from '../../types/calendario';

// La agenda traera los ultimos 30 dias para el calendario
export const getCalendarByUser = async ({ uid }: { uid: string }) => {
  const docRef = doc(db, 'calendar', uid!);

  return getDoc(docRef)
    .then(docSnap => {
      let agenda = [];
      if (docSnap.exists()) {
        agenda = docSnap.data().agenda;
      }

      return agenda ?? null;
    })
    .catch(error => {
      throw error.parsedError;
    });
};

// Obtengo las emociones del dia
export const getEmotionsTodayByUser = async ({ uid }: { uid: string }) => {
  const docRef = doc(db, 'calendar', uid!);

  return getDoc(docRef)
    .then(docSnap => {
      let agenda = [];
      if (docSnap.exists()) {
        agenda = docSnap.data().agenda;
      }

      return agenda ?? null;
    })
    .catch(error => {
      throw error.parsedError;
    });
};

export const createEmotionTodayByUser = async ({
  uid,
  nuevoItem,
}: {
  uid: string;
  nuevoItem: CalendarioItemType;
}) => {
  try {
    await setDoc(doc(db, 'calendar', uid), {
      insignias: nuevoItem,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};

export const updateEmotionTodayByUser = async ({
  uid,
  itemActualizar,
}: {
  uid: string;
  itemActualizar: CalendarioItemType;
}) => {
  try {
    await updateDoc(doc(db, 'calendar', uid), {
      itemActualizar: itemActualizar,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error updating document: ' + error);
  }
};
