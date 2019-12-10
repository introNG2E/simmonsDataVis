const mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

const studentSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    updated_at : Date,
    created_at : Date,
    survey: {
        age:    {type: Number},
        gender: {type: String},
        raceEthnicity: {type: String},
        enrollStatus: {type: String},
        collegeYear: {type: String},
        major: {type: String},
        activities: {type: Array},
        weekHr: {type: Number},
        MajorSatisfaction1: {type: String},
        MajorSatisfaction2: {type: String},
        MajorSatisfaction3: {type: String},
        MajorSatisfaction4: {type: String},
        MajorSatisfaction5: {type: String},
        Belonging1: {type: String},
        Belonging2: {type: String},
        Belonging3: {type: String},
        MajorValuing1: {type: String},
        MajorValuing2: {type: String},
        MajorValuing3: {type: String},
        AchievementStriving1: {type: String},
        AchievementStriving2: {type: String},
        AchievementStriving3: {type: String},
        AchievementStriving4: {type: String},
        AchievementStriving5: {type: String},
        PosFalRelationship1: {type: String},
        PosFalRelationship2: {type: String},
        PosFalRelationship3: {type: String},
        PeerInteraction1: {type: String},
        PeerInteraction2: {type: String},
        PeerInteraction3: {type: String},
        PeerInteraction4: {type: String},
        Grit1: {type: String},
        Grit2: {type: String},
        Grit3: {type: String},
        Grit4: {type: String},
        Grit5: {type: String},
        Grit6: {type: String},
        Grit7: {type: String},
        Grit8: {type: String},
        topActivity: {type: String},
        E2: {type: Number},
        E3: {type: Number},
        E4: {type: Number},
        E5: {type: Number},
        E6: {type: Number},
        E7: {type: Number},
        E8: {type: Number},
        E9: {type: Number},
        phone: {type: String}
    }
});

// Before saving student into database, updates the updated_at and created_at (if student is new) 
studentSchema.pre('save', function(next) {
    const currentDate = new Date();
    this.updated_at = currentDate;
    if(!this.created_at){
      this.created_at = currentDate;
    }
    next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


