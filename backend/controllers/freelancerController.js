import Freelancer from '../models/Freelancer.js';
import User from '../models/User.js';

export const getFreelancers = async (req, res) => {
  try {
    const { skills, minRate, maxRate, page = 1, limit = 10 } = req.query;

    const filter = { verified: true };

    if (skills) {
      const skillArray = skills.split(',').map(s => s.trim());
      filter.skills = { $in: skillArray };
    }

    if (minRate || maxRate) {
      filter.hourlyRate = {};
      if (minRate) filter.hourlyRate.$gte = Number(minRate);
      if (maxRate) filter.hourlyRate.$lte = Number(maxRate);
    }

    const skip = (page - 1) * limit;

    const freelancers = await Freelancer.find(filter)
      .populate('userId', 'name email avatar')
      .limit(Number(limit))
      .skip(skip)
      .sort({ rating: -1 });

    const total = await Freelancer.countDocuments(filter);

    res.json({
      freelancers,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Get freelancers error:', error);
    res.status(500).json({ error: 'Failed to fetch freelancers' });
  }
};

export const getFreelancerProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const freelancer = await Freelancer.findById(id)
      .populate('userId', 'name email avatar bio');

    if (!freelancer) {
      return res.status(404).json({ error: 'Freelancer not found' });
    }

    res.json(freelancer);
  } catch (error) {
    console.error('Get freelancer profile error:', error);
    res.status(500).json({ error: 'Failed to fetch freelancer profile' });
  }
};

export const updateFreelancerProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const freelancer = await Freelancer.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    ).populate('userId', 'name email avatar');

    if (!freelancer) {
      return res.status(404).json({ error: 'Freelancer not found' });
    }

    res.json({
      message: 'Profile updated successfully',
      freelancer,
    });
  } catch (error) {
    console.error('Update freelancer profile error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

export const verifyFreelancer = async (req, res) => {
  try {
    const { id } = req.params;

    const freelancer = await Freelancer.findByIdAndUpdate(
      id,
      { verified: true },
      { new: true }
    );

    if (!freelancer) {
      return res.status(404).json({ error: 'Freelancer not found' });
    }

    res.json({
      message: 'Freelancer verified successfully',
      freelancer,
    });
  } catch (error) {
    console.error('Verify freelancer error:', error);
    res.status(500).json({ error: 'Failed to verify freelancer' });
  }
};