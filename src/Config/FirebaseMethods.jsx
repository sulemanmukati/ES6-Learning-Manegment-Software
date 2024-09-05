import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./FirebaseConfig";

//~*~ -   REALTIME DATABASE   - ~*~\\
const db = getDatabase(app);

export const setData = (nodeName, data) => {
  return new Promise((resolve, reject) => {
    const isUpdate = data.id;
    if (!isUpdate) {
      data.id = push(ref(db, `${nodeName}`)).key;
    }
    const reference = ref(db, `${nodeName}/${data.id}`);
    set(reference, data)
      .then(() => {
        resolve(
          isUpdate ? "Record Successfully Updated" : "Successfully Submitted"
        );
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getData = (nodeName, id) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    onValue(reference, (data) => {
      if (data.exists()) {
        if (id) {
          resolve(data.val());
        } else {
          resolve(Object.values(data.val()));
        }
      } else {
        reject({ message: "Error While Getting the Data" });
      }
    });
  });
};

export const deleteData = (nodeName, id) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${id}`);
    remove(reference)
      .then(() => {
        resolve("Successfully Deleted");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//~*~ -   AUTHENTICATION   - ~*~\\
const auth = getAuth(app);

export const signupUser = (email, password, userName, userType) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setData("Users", {
          Username: userName,
          Email: email,
          UserType: userType,
          Password: password,
          id: res.user.uid,
        })
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            console.log(err, "FAILURE");
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const signinUser = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const signoutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then((res) => {
        resolve(res);
        localStorage.clear();
      })
      .catch((error) => {
        reject(error);
      });
  });
};
