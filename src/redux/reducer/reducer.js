const initialState = {
  contactList: [],
  search: '',
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
    case 'FILTER_CONTACT':
      return { ...state, search: payload.search };

    default:
      return { ...state };
  }
}
