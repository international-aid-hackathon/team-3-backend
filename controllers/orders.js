import { Order } from '../models/order.js';

const index = (req, res) => {
	Order.find({ owner: req.user.profile }, (err, foundOrders) => {
		if (err) console.log('Error in orders#index:', err);

		if (!foundOrders)
			return res.json({
				message: 'No Orders found in database.',
			});

		res.status(200).json({ orders: foundOrders });
	});
};

const show = (req, res) => {
	Order.findById(req.params.id, (err, foundOrder) => {
		if (err) {
			console.log('Error in orders#show:', err);

			if (!foundOrders)
				return res.json({
					message: 'There is no order with this ID in the db.',
				});

			return res.send('Incomplete event#show controller function');
		}

		res.status(200).json({
			order: foundOrder,
		});
	});
};

const create = (req, res) => {
	console.log('creating', req.body);
	req.body.owner = req.user.profile;
	Order.create(req.body, (err, savedOrder) => {
		if (err) console.log('Error in order#create:', err);

		// Validations and error handling here

		res.status(201).json({ orders: savedOrder });
	});
};

const update = (req, res) => {
	Order.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedOrder) => {
			if (err) {
				console.log('Error in order#update:', err);

				return res.send('Incomplete order#update controller function');
			}

			res.status(200).json({
				updatedOrder,
			});
		}
	);
};

const destroy = (req, res) => {
	Order.findByIdAndDelete(req.params.id, (err, deletedOrder) => {
		if (err) {
			console.log('Error in orders#destroy:', err);

			return res.send('Incomplete orders#destroy controller function');
		}

		res.status(200).json({
			deletedOrder,
		});
	});
};


export {
	index,
	show,
	create,
	update,
	destroy,
};