export const createEntry = (entry) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;

        firestore.collection(entry.option).add({
            ...entry,
            firstName: profile.firstName,
            lastName: profile.lastName,
            nick: profile.nick,
            userId: userId,
            createAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_ENTRY',
                entry: entry
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_ENTRY_ERROR',
                error: err
            })
        })
    }
}