import dbConnect from '../../../../lib/mongodb';

import User from '@/models/User';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    await dbConnect();

    // Ensure the user is authenticated
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { email } = session.user;

    if (req.method === 'GET') {
        try {
            const user = await User.findOne({ email }).select('-password');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    if (req.method === 'PUT') {
        try {
            const { name, bio } = req.body;
            const updatedUser = await User.findOneAndUpdate(
                { email },
                { name, bio },
                { new: true, runValidators: true }
            ).select('-password');

            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json({ message: 'Error updating profile' });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}
