export default {
    "title": "Engineering Out-Of-Class Activity Survey",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "demographicsPanel",
        "elements": [
         {
          "type": "text",
          "name": "age",
          "title": "Age",
          "isRequired": true,
          "inputType": "number",
          "placeHolder": "Enter your age here"
         },
         {
          "type": "dropdown",
          "name": "gender",
          "title": "Gender",
          "choices": [
           {
            "value": "2",
            "text": "Woman"
           },
           {
            "value": "1",
            "text": "Man"
           },
           {
            "value": "3",
            "text": "Trans"
           },
           {
            "value": "4",
            "text": "Other"
           },
           {
            "value": "5",
            "text": "I don't want to respond"
           }
          ],
          "optionsCaption": "Select your gender here"
         },
         {
          "type": "dropdown",
          "name": "raceEthnicity",
          "title": "Race/Ethnicity",
          "choices": [
           {
            "value": "1",
            "text": "American Indian or Alaska Native"
           },
           {
            "value": "2",
            "text": "Asian"
           },
           {
            "value": "3",
            "text": "Black or African America"
           },
           {
            "value": "4",
            "text": "Hispanic, Latino, or Spanish Origin"
           },
           {
            "value": "5",
            "text": "Native Hawaiian or Other Pacific Islander"
           },
           {
            "value": "6",
            "text": "White"
           }
          ],
          "optionsCaption": "Select your Race/Ethnicity here"
         }
        ],
        "title": "General"
       },
       {
        "type": "panel",
        "name": "collegePanel",
        "elements": [
         {
          "type": "dropdown",
          "name": "enrollStatus",
          "title": "What is your enrollment status as a student?",
          "choices": [
           {
            "value": "1",
            "text": "Full-time"
           },
           {
            "value": "2",
            "text": "Part-time"
           }
          ],
          "optionsCaption": "Select your enrollment status here"
         },
         {
          "type": "dropdown",
          "name": "collegeYear",
          "title": "What year in college are you?",
          "choices": [
           {
            "value": "1",
            "text": "First Year"
           },
           {
            "value": "2",
            "text": "Second Year"
           },
           {
            "value": "3",
            "text": "Third Year"
           },
           {
            "value": "4",
            "text": "Fourth Year"
           },
           {
            "value": "5",
            "text": "Fifth Year and Beyond"
           },
           {
            "value": "6",
            "text": "Graduate Student"
           }
          ],
          "optionsCaption": "Select your year here"
         },
         {
          "type": "dropdown",
          "name": "major",
          "title": "What is your major?",
          "choices": [
           {
            "value": "1",
            "text": "General Engineering"
           },
           {
            "value": "2",
            "text": "Civil Engineering"
           },
           {
            "value": "3",
            "text": "Construction"
           },
           {
            "value": "4",
            "text": "Agricultural Engineering"
           },
           {
            "value": "5",
            "text": "Applied Engineering"
           },
           {
            "value": "6",
            "text": "Biomedical Engineering"
           },
           {
            "value": "7",
            "text": "Chemical Engineering"
           },
           {
            "value": "8",
            "text": "Electrical Engineering"
           },
           {
            "value": "9",
            "text": "Engineering Management"
           },
           {
            "value": "10",
            "text": "Engineering Physics"
           },
           {
            "value": "11",
            "text": "Engineering Science"
           },
           {
            "value": "12",
            "text": "Industrial Engineering"
           },
           {
            "value": "13",
            "text": "Materials Engineering"
           },
           {
            "value": "14",
            "text": "Mechanical Engineering"
           },
           {
            "value": "15",
            "text": "Nanoengineering"
           },
           {
            "value": "16",
            "text": "Nuclear Engineering"
           },
           {
            "value": "17",
            "text": "Other"
           }
          ],
          "optionsCaption": "Select your major here"
         }
        ],
        "title": "College"
       }
      ],
      "title": "Demographics",
      "navigationButtonsVisibility": "show"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "panel",
        "name": "involvementPanel",
        "elements": [
         {
          "type": "checkbox",
          "name": "activities",
          "title": "Select all activities that you have participated.",
          "choices": [
           {
            "value": "1",
            "text": "Design Competition Team"
           },
           {
            "value": "2",
            "text": "Culture, Faith, Gender, Identity"
           },
           {
            "value": "3",
            "text": "Engineering outreach support"
           },
           {
            "value": "4",
            "text": "Environmental"
           },
           {
            "value": "5",
            "text": "Film, Theatre, Visual Arts"
           },
           {
            "value": "6",
            "text": "Fraternity or Sorority, social"
           },
           {
            "value": "7",
            "text": "Fraternity or Sorority, coeducation related to your major, for instance business, engineering, or services"
           },
           {
            "value": "8",
            "text": "International experiences"
           },
           {
            "value": "9",
            "text": "Job"
           },
           {
            "value": "10",
            "text": "Living-Learning Community"
           },
           {
            "value": "11",
            "text": "Media, Publications and Journalism"
           },
           {
            "value": "12",
            "text": "Military"
           },
           {
            "value": "13",
            "text": "Music/Dance"
           },
           {
            "value": "14",
            "text": "Preprofessional"
           },
           {
            "value": "15",
            "text": "Professional Experiences"
           },
           {
            "value": "16",
            "text": "Research"
           },
           {
            "value": "17",
            "text": "Service, Public Service"
           },
           {
            "value": "18",
            "text": "Sports"
           },
           {
            "value": "19",
            "text": "Student Government"
           },
           {
            "value": "20",
            "text": "Other student clubs & organization?"
           }
          ]
         },
         {
          "type": "text",
          "name": "weekHr",
          "title": "How many hours a week do you spend on this activity?",
          "inputType": "number",
          "placeHolder": "Enter hour a week here (i.e. number only)"
         }
        ],
        "title": "Major Satisfaction"
       }
      ],
      "title": "Involvement"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "panel",
        "name": "engagementPanel",
        "elements": [
         {
          "type": "dropdown",
          "name": "MajorSatisfaction1",
          "title": "My major is interesting to me.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strong Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "MajorSatisfaction2",
          "title": "I am enthusiastic about my major.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strong Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "MajorSatisfaction3",
          "title": "I think I will be very happy to spend the rest of my career in my current academic discipline.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strong Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "MajorSatisfaction4",
          "title": "I don't intend to change from my current major to another major.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strong Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "MajorSatisfaction5",
          "title": "Overall, I am happy with the major I've chosen.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strong Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         }
        ],
        "title": "Major Satisfaction"
       },
       {
        "type": "panel",
        "name": "belongingPanel",
        "elements": [
         {
          "type": "dropdown",
          "name": "Belonging1",
          "title": "I do not feel a strong sense of \"belonging\" to my academic discipline.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Belonging2",
          "title": "I do not feel \"emotionally attached\" to my academic discipline.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Belonging3",
          "title": "I do not feel like \"part of the family\" in my academic discipline.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         }
        ],
        "title": "Academic Discipline Belonging"
       },
       {
        "type": "panel",
        "name": "majorValuingPanel",
        "elements": [
         {
          "type": "dropdown",
          "name": "MajorValuing1",
          "title": "Being good at my major is an important part of who I am.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "MajorValuing2",
          "title": "Success in my major at school is very valuable to me.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "MajorValuing3",
          "title": "It matters to me how well I do in my major at school.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         }
        ],
        "title": "Major Valuing"
       },
       {
        "type": "panel",
        "name": "achievementStrivingPanel",
        "elements": [
         {
          "type": "dropdown",
          "name": "AchievementStriving1",
          "title": "I am constantly on the lookout for new ways to improve my life.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "AchievementStriving2",
          "title": "If I see something I don't like, I fix it.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "AchievementStriving3",
          "title": "I love being a champion for my ideas, even against others' opposition.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "AchievementStriving4",
          "title": "I excel at identifying opportunities.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "AchievementStriving5",
          "title": "If I believe in an idea, no obstacle will prevent me from making it happen.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         }
        ],
        "title": "Achievement Striving"
       },
       {
        "type": "panel",
        "name": "posfalRelationship",
        "elements": [
         {
          "type": "dropdown",
          "name": "PosFalRelationship1",
          "title": "I am treated with as much respect by faculty as other students in my major.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "PosFalRelationship2",
          "title": "The instructors in my major respect me.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "PosFalRelationship3",
          "title": "I am satisfied with the faculty in my major.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         }
        ],
        "title": "Peer Faculty Relationship"
       },
       {
        "type": "panel",
        "name": "PeerInteractionPanel",
        "elements": [
         {
          "type": "dropdown",
          "name": "PeerInteraction1",
          "title": "I discuss academic issues with peers.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "PeerInteraction2",
          "title": "I discuss career issues with peers.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "PeerInteraction3",
          "title": "I discuss social issues with peers.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "PeerInteraction4",
          "title": "I discuss cultural issues with peers.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         }
        ],
        "title": "Peer Interaction"
       },
       {
        "type": "panel",
        "name": "gritPanel",
        "elements": [
         {
          "type": "dropdown",
          "name": "Grit1",
          "title": "New ideas and projects sometimes distract me from previous ones.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Grit2",
          "title": "Setbacks don't discourage me.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Grit3",
          "title": "I have been obsessed with a certain idea or project for a short time but later lost interest.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Grit4",
          "title": "I am a hard worker.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Grit5",
          "title": "I often set a goal but later choose to pursue a different one.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Grit6",
          "title": "I have difficulty maintaining my focus on projects that take more than a few months to complete.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Grit7",
          "title": "I finish whatever I begin.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "Grit8",
          "title": "I am diligent.",
          "choices": [
           {
            "value": "1",
            "text": "Strongly Disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "3",
            "text": "Agree"
           },
           {
            "value": "4",
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         }
        ],
        "title": "Angela Duckworth's 8-item Grit Scale"
       }
      ],
      "title": "Engagement"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "panel",
        "name": "topActivityPanel",
        "elements": [
         {
          "type": "dropdown",
          "name": "topActivity",
          "title": "Select your top out-of-class activity (i.e. activity which provides you the most benefits).",
          "choices": [
           {
            "value": "1",
            "text": "Design Competition Team"
           },
           {
            "value": "2",
            "text": "Culture, Faith, Gender, Identity"
           },
           {
            "value": "3",
            "text": "Engineering Outreach Support"
           },
           {
            "value": "4",
            "text": "Environmental"
           },
           {
            "value": "5",
            "text": "Film, Theatre, Visual Arts"
           },
           {
            "value": "6",
            "text": "Fraternity or Sorority, Social"
           },
           {
            "value": "7",
            "text": "Fraternity or Sorority, Coeducation related to your major, for instance business , engineering, or services"
           },
           {
            "value": "8",
            "text": "International Experiences"
           },
           {
            "value": "9",
            "text": "Job"
           },
           {
            "value": "10",
            "text": "Living-Learning Community"
           },
           {
            "value": "11",
            "text": "Media, Publications and Journalism"
           },
           {
            "value": "12",
            "text": "Military"
           },
           {
            "value": "13",
            "text": "Music/Dance"
           },
           {
            "value": "14",
            "text": "Preprofessional"
           },
           {
            "value": "15",
            "text": "Professional Experiences"
           },
           {
            "value": "16",
            "text": "Research"
           },
           {
            "value": "17",
            "text": "Service, Public Service"
           },
           {
            "value": "18",
            "text": "Sports"
           },
           {
            "value": "19",
            "text": "Student Government"
           },
           {
            "value": "20",
            "text": "Other student clubs & organization"
           }
          ],
          "optionsCaption": "Select your activity here"
         }
        ],
        "title": "Types of Top Activity"
       },
       {
        "type": "panel",
        "name": "E2Panel",
        "elements": [
         {
          "type": "dropdown",
          "name": "E2",
          "title": "E2020-2: Practical Ingenuity",
          "choices": [
           {
            "value": 1,
            "text": "Strongly Disagree"
           },
           {
            "value": 2,
            "text": "Disagree"
           },
           {
            "value": 3,
            "text": "Agree"
           },
           {
            "value": 4,
            "text": "Strongly Agree"
           }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "E3",
          "title": "E2020-3: Creativity",
          "choices": [
            {
                "value": 1,
                "text": "Strongly Disagree"
               },
               {
                "value": 2,
                "text": "Disagree"
               },
               {
                "value": 3,
                "text": "Agree"
               },
               {
                "value": 4,
                "text": "Strongly Agree"
               }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "E4",
          "title": "E2020-4: Communication",
          "choices": [
            {
                "value": 1,
                "text": "Strongly Disagree"
               },
               {
                "value": 2,
                "text": "Disagree"
               },
               {
                "value": 3,
                "text": "Agree"
               },
               {
                "value": 4,
                "text": "Strongly Agree"
               }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "E5",
          "title": "E2020-5: Business and Management",
          "choices": [
            {
                "value": 1,
                "text": "Strongly Disagree"
               },
               {
                "value": 2,
                "text": "Disagree"
               },
               {
                "value": 3,
                "text": "Agree"
               },
               {
                "value": 4,
                "text": "Strongly Agree"
               }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "E6",
          "title": "E2020-6: Leadership",
          "choices": [
            {
                "value": 1,
                "text": "Strongly Disagree"
               },
               {
                "value": 2,
                "text": "Disagree"
               },
               {
                "value": 3,
                "text": "Agree"
               },
               {
                "value": 4,
                "text": "Strongly Agree"
               }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "E7",
          "title": "E2020-7: High Ethical Standards",
          "choices": [
            {
                "value": 1,
                "text": "Strongly Disagree"
               },
               {
                "value": 2,
                "text": "Disagree"
               },
               {
                "value": 3,
                "text": "Agree"
               },
               {
                "value": 4,
                "text": "Strongly Agree"
               }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "E8",
          "title": "E2020-8: Professionalism",
          "choices": [
            {
                "value": 1,
                "text": "Strongly Disagree"
               },
               {
                "value": 2,
                "text": "Disagree"
               },
               {
                "value": 3,
                "text": "Agree"
               },
               {
                "value": 4,
                "text": "Strongly Agree"
               }
          ],
          "optionsCaption": "Select your opinion here"
         },
         {
          "type": "dropdown",
          "name": "E9",
          "title": "E2020-9: Dynamism, Agility, Resilience, and Flexibility",
          "choices": [
            {
                "value": 1,
                "text": "Strongly Disagree"
               },
               {
                "value": 2,
                "text": "Disagree"
               },
               {
                "value": 3,
                "text": "Agree"
               },
               {
                "value": 4,
                "text": "Strongly Agree"
               }
          ],
          "optionsCaption": "Select your opinion here"
         }
        ],
        "title": "Engineering 2020 Outcomes"
       }
      ],
      "title": "Outcomes"
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "panel",
        "name": "contactInfoPanel",
        "elements": [
         {
          "type": "text",
          "name": "phone",
          "title": "Phone Number",
          "inputType": "tel",
          "placeHolder": "Enter your phone number here"
         }
        ],
        "title": "Contact Information",
        "description": "Would you mind receiving future questions about this survey? If so, would you mind sharing your phone number below?"
       }
      ],
      "title": "Other"
     }
    ],
    "showProgressBar": "top"
   }