const { gql } = require("apollo-server-express");

// TODO: add category to type Orders
// TODO: mutation addProduct, should it return Product or User???
const typeDefs = gql`
	type User {
		_id: ID
		username: String!
		email: String!
		products: [Product]
		orders: [Orders]
	}

	type Product {
		_id: ID
		title: String
		description: String
		image: String
		price: Int
		quantity: Int
	}

	input ProductInput {
		title: String
		description: String
		image: String
		price: Int
		quantity: Int
	}

	type Orders {
		_id: ID
		purchaseDate: Int
		products: [Product]
	}

	type Query {
		me: User
		users: [User]
		user(username: String!): User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		addProduct(productData: ProductInput): Product
	}

	type Auth {
		token: ID!
		user: User
	}
`;

module.exports = typeDefs;

// addProduct(productData: ProductInput): Product
// addProduct(title: String, description: String, image: String, price: Int, quantity: Int): Product
