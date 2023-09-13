const userResolver = {
    Query: {
        getUserDetailsQuery: () => {
            return {
                firstName: "Kshitij",
                lastName: "Dutt",
            }
        }
    }
}

export default userResolver;