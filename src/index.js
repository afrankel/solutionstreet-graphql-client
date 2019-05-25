import ApolloBoost, { gql } from 'apollo-boost'

const client = new ApolloBoost({
    uri: 'https://afternoon-island-18488.herokuapp.com/'
})

const getCustomers = gql`
    query {
        customers {
            firstName
            lastName
        }
    }
`

client.query({
    query: getCustomers
}).then((response) => {
    let html = ''

    response.data.customers.forEach((customer) => {
        html += `
            <div>
                <h3>${customer.firstName} ${customer.lastName}</h3>
            </div>
        `
    })

    document.getElementById('customers').innerHTML = html
})
