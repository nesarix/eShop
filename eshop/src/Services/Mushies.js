import { async } from "@firebase/util";
import {
	collection,
	getDocs,
	doc,
	getDoc,
	updateDoc,
	increment,
} from "firebase/firestore";

import db from "../config/firebase";

export const getMushies = async () => {
	const collectionRef = collection(db, "products");
	const querySnapshot = await getDocs(collectionRef);
	const cleanedData = querySnapshot.docs.map((rawDocument) => {
		return { id: rawDocument.id, ...rawDocument.data() };
	});
	return cleanedData;
};

export const getMushiesById = async (id) => {
	const docRef = doc(db, "products", id);
	const querySnapshot = await getDoc(docRef);
	return { id: querySnapshot.id, ...querySnapshot.data() };
};

export const addItem = async (id) => {
	const docRef = doc(db, "products", id);
	await updateDoc(docRef, { quantity: increment(1) });
	return true;
};

export const subItem = async (id) => {
	const docRef = doc(db, "products", id);
	await updateDoc(docRef, { quantity: increment(-1) });
};
