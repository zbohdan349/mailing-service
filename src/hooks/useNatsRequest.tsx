import { Empty, JSONCodec, NatsConnection, connect } from "nats.ws"

let nc: NatsConnection;

export async function natsRequest<T>(url: string, payload?: any) {
	if (!nc) {
		try {
			nc = await connect({
				servers: ["ws://ws://127.0.0.1:9222"],
				user: 'admin',
				pass: 'admin'
			})
		} catch (error) {
			console.error(error)
		}
	}
	const msg = await nc.request(url, JSONCodec().encode(payload));
	const headers = msg.headers?.keys();
	const data = JSONCodec().decode(msg.data) as T
	return { headers, data }
}