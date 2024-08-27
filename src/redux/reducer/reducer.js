const initialState = {
  contactList: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNum: payload.phoneNum },
        ],
      };

    default:
      return { ...state };
  }
}
