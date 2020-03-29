const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const Post = require('../../models/Post');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private

router.get('/me', auth , async (req, res) => {
     try {
         const profile = await Profile.findOne({user: req.user.id}).populate('user',
          ['name', 'avatar']);
          if(!profile) {
              return res.status(400).json({msg: 'No profile for this user'});
          }

          res.json(profile);
     } catch (err) {
         console.error(err.message);
         res.status(500).send('Server error');
     }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private

router.post('/', 
    [
    auth, 
    [
    check('status', 'Status is required').not().isEmpty(),
    check('autres', 'Autres is required').not().isEmpty() 
]
],
 async (req, res)=> {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

      const {
        equipe,
        location,
        status,
        autres,
        motivation,
        githubusername,
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram
      } = req.body;

      // Build profile object
      const profileFields = {};
      profileFields.user = req.user.id;
      if(equipe) profileFields.equipe = equipe;
      if(location) profileFields.location = location;
      if(status) profileFields.status = status;
      if(motivation) profileFields.motivation = motivation;
      if(githubusername) profileFields.githubusername = githubusername;
      if(autres) {
          profileFields.autres = autres.split(',').map(autre => autre.trim());
      }

      // Build social object
      profileFields.social = {}
      if(youtube) profileFields.social.youtube = youtube;
      if(twitter) profileFields.social.twitter = twitter;
      if(facebook) profileFields.social.facebook = facebook;
      if(instagram) profileFields.social.instagram = instagram;
      if(linkedin) profileFields.social.linkedin = linkedin;

      try {
          let profile = await Profile.findOne({user: req.user.id});
          if(profile) {
              // Update 
              profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true}
                );
                return res.json(profile);
          }

          // Create
          profile = new Profile(profileFields)
          await profile.save();
          res.json(profile)
      } catch (err) {
          console.error(err.message);
          res.send(500).send('Server error')
      }
         
}
);

// @route    GET api/profile
// @desc     Get all profile
// @access   Public
router.get('/', async (req, res) => {
    try {
        const profile = await Profile.find().populate('user', ['name', 'avatar', 'email']);
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
        user: req.params.user_id 
         }).populate('user',
        ['name', 'avatar', 'email']);

        if(!profile)
        return res.status(400).json({ msg: 'Profile not found' });

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if(err.kind=='ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server Error')
    }
})

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth ,async (req, res) => {
    try {
        // @todo - remove users posts
        await Post.deleteMany({ user: req.user.id})
        // Remove profile
        await Profile.findOneAndRemove({user: req.user.id})
       // Remove user
        await User.findOneAndRemove({_id: req.user.id})
        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
router.put('/experience', 
[
    auth,
[
    check('title', 'Title is required').not().isEmpty(),
    check('equipe', 'Equipe is required').not().isEmpty(),
    check('from', 'From is required').not().isEmpty()
]
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }

    const {
        title,
        equipe,
        location,
        from,
        to,
        current,
        description
    } = req.body;

    const newExp = {
        title,
        equipe,
        location,
        from,
        to,
        current,
        description
    }

    try {
        const profile = await Profile.findOne({user: req.user.id});
        profile.experience.unshift(newExp);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(400).SEND('Server Error');
    }
})


// @desc    Delete expeience from profile
// @access  Private
router.delete('/experience/:exp_id', auth, async(req, res)=> {
    try {
        const profile = await Profile.findOne({user: req.user.id});

        // Get remove index
        const removeIndex = profile.experience
        .map(item => item.id).indexOf(req.params.exp_id);
        profile.experience.splice(removeIndex, 1);
        await profile.save();
        res.send(profile)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serve Error');
    }
})

// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
router.put('/education',
[
    auth,
[
    check('fieldofstudy', 'fieldofstudy is required').not().isEmpty(),
    check('from', 'from is required').not().isEmpty(),
    check('school', 'school is required').not().isEmpty(),
    check('degree', 'degree is required').not().isEmpty()
]
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }

    const {
        degree,
        school,
        from,
        fieldofstudy,
        description,
        to
    } = req.body;

    const newEdu = {
        degree,
        school,
        from,
        fieldofstudy,
        description,
        to
    }

    try {
        const profile = await Profile.findOne({user: req.user.id});
        profile.education.unshift(newEdu);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(400).SEND('Server Error');
    }
})


// @desc    Delete expeience from profile
// @access  Private
router.delete('/education/:edu_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        // Get remove index
        const removeIndex = profile.education
        .map(item => item.id)
        .indexOf(req.params.edu_id);
        profile.education.splice(removeIndex, 1);
        await profile.save();
        res.send(profile)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route    GET api/profile/github/:username
// @desc     Get user repos from Github
// @access   Public
router.get('/github/:username', (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/
            repos?per_page=5&sort=created:asc&client_id=
            ${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            methode: 'GET',
            headers: { 'user-agent': 'node.js' }
        };

        request(options, (error, response, body) => {
            if(error) console.error(error);

            if(response.statusCode !== 200) {
                res.status(404).json({ msg: 'No Github profile found' });
            }

            res.json(JSON.parse(body));
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;