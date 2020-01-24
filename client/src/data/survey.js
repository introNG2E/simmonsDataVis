export default {
  title: "Engineering Out-Of-Class Activity Survey",
  pages: [
   {
    name: "consentPage",
    elements: [
     {
      type: "panel",
      name: "panel3",
      elements: [
       {
        type: "html",
        name: "consentText",
        html: "<p>Study Title: Investigating Co-Curricular Participation of Students Underrepresented in Engineering</p>\n\n\n<p>Researchers: Anh Chau</p>\n<h4><u>Consent Information and Directions</u></h4><p>Do you participate in any activities? If so, I would like to know more about these activities. You are invited to participate in a research study that seeks to learn about students’ experiences from participating in various activities, called co/extracurricular activities, which occur outside of taking courses.</p><h4><u>Consent Information</u></h4><p>The information you provide will be used to help college and university administrators and faculty improve out of class experiences and students' ability to benefit from such experiences. It may also identify links between participation in out of class activities and commitment to engineering majors and careers.</p><p>It should take about 20 minutes to complete the survey. Persons who complete the survey will be entered into a drawing for ten (10) $25 Amazon gift cards. The odds of winning are 1 in 200.  To enter the drawing, please add your name and contact information at the end of the survey.  You are not required to enter the drawing.</p><p>There are no right or wrong answers. However, please choose your response options carefully. There are no known risks to study participants. Your responses will remain confidential. You are free to discontinue this survey at any time without  any consequences. You should be over 18 to be eligible to participate in this study. Completion of this online questionnaire will be considered as your consent to participate in this study and permission to use your data for the purposes of the study specified above.</p><p>Any questions concerning this study should be directed to Dr. Denise R. Simmons at densimm@vt.edu or (540) 553-6013. The Institutional Review Board (IRB) at Virginia Tech (VT) has approved this study. Should you have any questions or concerns about the study’s conduct or your rights as a research subject, or need to report a research-related injury or event, you may contact the VT IRB Chair, Dr. David M. Moore atmoored@vt.edu or (540) 231-4991.</p><h5><u>Directions:</u></h5><p>(1) You can use the back button to move Back and forth between pages.</p><p>(2) Hovering over words in <font color=\"blue\">blue ink</font> will display text, specifically examples of out-of-classroom activities and outcomes.</p><p><strong>(3) Clicking \"agree\" below indicates that:\n</strong>\n</p>\n<p><b>- you voluntarily agree to participate</b></p>\n<p><b>- you are at least 18 years of age</b></p>\n\n<p><b>If you do not wish to participate in the study, please decline by clicking the \"disagree\" button. </b></p><p></p>"
       },
       {
        type: "dropdown",
        name: "consentQuestion",
        isRequired: true,
        titleLocation: "hidden",
        choices: [
         {
          value: "agree",
          text: "Agree"
         },
         {
          value: "disagree",
          text: "Disagree"
         }
        ]
       }
      ]
     }
    ],
    navigationButtonsVisibility: "show"
   },
   {
    name: "page1",
    elements: [
     {
      type: "panel",
      name: "demographicsPanel",
      elements: [
       {
        type: "text",
        name: "age",
        title: "Age",
        isRequired: true,
        inputType: "number",
        placeHolder: "Enter your age here"
       },
       {
        type: "dropdown",
        name: "gender",
        title: "Gender",
        isRequired: true,
        choices: [
         {
          value: "2",
          text: "Woman"
         },
         {
          value: "1",
          text: "Man"
         },
         {
          value: "3",
          text: "Trans"
         },
         {
          value: "4",
          text: "Other"
         },
         {
          value: "5",
          text: "I don't want to respond"
         }
        ],
        optionsCaption: "Select your gender here"
       },
       {
        type: "dropdown",
        name: "raceEthnicity",
        title: "Race/Ethnicity",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "American Indian or Alaska Native"
         },
         {
          value: "2",
          text: "Asian"
         },
         {
          value: "3",
          text: "Black or African America"
         },
         {
          value: "4",
          text: "Hispanic, Latino, or Spanish Origin"
         },
         {
          value: "5",
          text: "Native Hawaiian or Other Pacific Islander"
         },
         {
          value: "6",
          text: "White"
         }
        ],
        optionsCaption: "Select your Race/Ethnicity here"
       }
      ],
      title: "General"
     },
     {
      type: "panel",
      name: "collegePanel",
      elements: [
       {
        type: "dropdown",
        name: "enrollStatus",
        title: "What is your enrollment status as a student?",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Full-time"
         },
         {
          value: "2",
          text: "Part-time"
         }
        ],
        optionsCaption: "Select your enrollment status here"
       },
       {
        type: "dropdown",
        name: "collegeYear",
        title: "What year in college are you?",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "First Year"
         },
         {
          value: "2",
          text: "Second Year"
         },
         {
          value: "3",
          text: "Third Year"
         },
         {
          value: "4",
          text: "Fourth Year"
         },
         {
          value: "5",
          text: "Fifth Year and Beyond"
         },
         {
          value: "6",
          text: "Graduate Student"
         }
        ],
        optionsCaption: "Select your year here"
       },
       {
        type: "dropdown",
        name: "major",
        title: "What is your major?",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "General Engineering"
         },
         {
          value: "2",
          text: "Civil Engineering"
         },
         {
          value: "3",
          text: "Construction"
         },
         {
          value: "4",
          text: "Agricultural Engineering"
         },
         {
          value: "5",
          text: "Applied Engineering"
         },
         {
          value: "6",
          text: "Biomedical Engineering"
         },
         {
          value: "7",
          text: "Chemical Engineering"
         },
         {
          value: "8",
          text: "Electrical Engineering"
         },
         {
          value: "9",
          text: "Engineering Management"
         },
         {
          value: "10",
          text: "Engineering Physics"
         },
         {
          value: "11",
          text: "Engineering Science"
         },
         {
          value: "12",
          text: "Industrial Engineering"
         },
         {
          value: "13",
          text: "Materials Engineering"
         },
         {
          value: "14",
          text: "Mechanical Engineering"
         },
         {
          value: "15",
          text: "Nanoengineering"
         },
         {
          value: "16",
          text: "Nuclear Engineering"
         },
         {
          value: "17",
          text: "Other"
         }
        ],
        optionsCaption: "Select your major here"
       }
      ],
      title: "College",
      isRequired: true
     }
    ],
    title: "Demographics",
    navigationButtonsVisibility: "show"
   },
   {
    name: "page2",
    elements: [
     {
      type: "panel",
      name: "involvementPanel",
      elements: [
       {
        type: "checkbox",
        name: "activities",
        title: "Select all activities that you have participated.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Design Competition Team"
         },
         {
          value: "2",
          text: "Culture, Faith, Gender, Identity"
         },
         {
          value: "3",
          text: "Engineering outreach support"
         },
         {
          value: "4",
          text: "Environmental"
         },
         {
          value: "5",
          text: "Film, Theatre, Visual Arts"
         },
         {
          value: "6",
          text: "Fraternity or Sorority, social"
         },
         {
          value: "7",
          text: "Fraternity or Sorority, coeducation related to your major, for instance business, engineering, or services"
         },
         {
          value: "8",
          text: "International experiences"
         },
         {
          value: "9",
          text: "Job"
         },
         {
          value: "10",
          text: "Living-Learning Community"
         },
         {
          value: "11",
          text: "Media, Publications and Journalism"
         },
         {
          value: "12",
          text: "Military"
         },
         {
          value: "13",
          text: "Music/Dance"
         },
         {
          value: "14",
          text: "Preprofessional"
         },
         {
          value: "15",
          text: "Professional Experiences"
         },
         {
          value: "16",
          text: "Research"
         },
         {
          value: "17",
          text: "Service, Public Service"
         },
         {
          value: "18",
          text: "Sports"
         },
         {
          value: "19",
          text: "Student Government"
         },
         {
          value: "20",
          text: "Other student clubs & organization?"
         }
        ]
       },
       {
        type: "text",
        name: "weekHr",
        title: "How many hours a week do you spend on this activity?",
        isRequired: true,
        inputType: "number",
        placeHolder: "Enter hour a week here (i.e. number only)"
       }
      ],
      title: "Major Satisfaction",
      isRequired: true
     }
    ],
    title: "Involvement"
   },
   {
    name: "page3",
    elements: [
     {
      type: "panel",
      name: "engagementPanel",
      elements: [
       {
        type: "dropdown",
        name: "MajorSatisfaction1",
        title: "My major is interesting to me.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strong Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "MajorSatisfaction2",
        title: "I am enthusiastic about my major.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strong Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "MajorSatisfaction3",
        title: "I think I will be very happy to spend the rest of my career in my current academic discipline.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strong Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "MajorSatisfaction4",
        title: "I don't intend to change from my current major to another major.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strong Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "MajorSatisfaction5",
        title: "Overall, I am happy with the major I've chosen.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strong Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       }
      ],
      title: "Major Satisfaction",
      isRequired: true
     },
     {
      type: "panel",
      name: "belongingPanel",
      elements: [
       {
        type: "dropdown",
        name: "Belonging1",
        title: "I do not feel a strong sense of \"belonging\" to my academic discipline.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Belonging2",
        title: "I do not feel \"emotionally attached\" to my academic discipline.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Belonging3",
        title: "I do not feel like \"part of the family\" in my academic discipline.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       }
      ],
      title: "Academic Discipline Belonging",
      isRequired: true
     },
     {
      type: "panel",
      name: "majorValuingPanel",
      elements: [
       {
        type: "dropdown",
        name: "MajorValuing1",
        title: "Being good at my major is an important part of who I am.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "MajorValuing2",
        title: "Success in my major at school is very valuable to me.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "MajorValuing3",
        title: "It matters to me how well I do in my major at school.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       }
      ],
      title: "Major Valuing",
      isRequired: true
     },
     {
      type: "panel",
      name: "achievementStrivingPanel",
      elements: [
       {
        type: "dropdown",
        name: "AchievementStriving1",
        title: "I am constantly on the lookout for new ways to improve my life.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "AchievementStriving2",
        title: "If I see something I don't like, I fix it.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "AchievementStriving3",
        title: "I love being a champion for my ideas, even against others' opposition.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "AchievementStriving4",
        title: "I excel at identifying opportunities.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "AchievementStriving5",
        title: "If I believe in an idea, no obstacle will prevent me from making it happen.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       }
      ],
      title: "Achievement Striving",
      isRequired: true
     },
     {
      type: "panel",
      name: "posfalRelationship",
      elements: [
       {
        type: "dropdown",
        name: "PosFalRelationship1",
        title: "I am treated with as much respect by faculty as other students in my major.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "PosFalRelationship2",
        title: "The instructors in my major respect me.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "PosFalRelationship3",
        title: "I am satisfied with the faculty in my major.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       }
      ],
      title: "Peer Faculty Relationship",
      isRequired: true
     },
     {
      type: "panel",
      name: "PeerInteractionPanel",
      elements: [
       {
        type: "dropdown",
        name: "PeerInteraction1",
        title: "I discuss academic issues with peers.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "PeerInteraction2",
        title: "I discuss career issues with peers.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "PeerInteraction3",
        title: "I discuss social issues with peers.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "PeerInteraction4",
        title: "I discuss cultural issues with peers.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       }
      ],
      title: "Peer Interaction",
      isRequired: true
     },
     {
      type: "panel",
      name: "gritPanel",
      elements: [
       {
        type: "dropdown",
        name: "Grit1",
        title: "New ideas and projects sometimes distract me from previous ones.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Grit2",
        title: "Setbacks don't discourage me.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Grit3",
        title: "I have been obsessed with a certain idea or project for a short time but later lost interest.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Grit4",
        title: "I am a hard worker.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Grit5",
        title: "I often set a goal but later choose to pursue a different one.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Grit6",
        title: "I have difficulty maintaining my focus on projects that take more than a few months to complete.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Grit7",
        title: "I finish whatever I begin.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "Grit8",
        title: "I am diligent.",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Strongly Disagree"
         },
         {
          value: "2",
          text: "Disagree"
         },
         {
          value: "3",
          text: "Agree"
         },
         {
          value: "4",
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       }
      ],
      title: "Angela Duckworth's 8-item Grit Scale",
      isRequired: true
     }
    ],
    title: "Engagement"
   },
   {
    name: "page4",
    elements: [
     {
      type: "panel",
      name: "topActivityPanel",
      elements: [
       {
        type: "dropdown",
        name: "topActivity",
        title: "Select your top out-of-class activity (i.e. activity which provides you the most benefits).",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Design Competition Team"
         },
         {
          value: "2",
          text: "Culture, Faith, Gender, Identity"
         },
         {
          value: "3",
          text: "Engineering Outreach Support"
         },
         {
          value: "4",
          text: "Environmental"
         },
         {
          value: "5",
          text: "Film, Theatre, Visual Arts"
         },
         {
          value: "6",
          text: "Fraternity or Sorority, Social"
         },
         {
          value: "7",
          text: "Fraternity or Sorority, Coeducation related to your major, for instance business , engineering, or services"
         },
         {
          value: "8",
          text: "International Experiences"
         },
         {
          value: "9",
          text: "Job"
         },
         {
          value: "10",
          text: "Living-Learning Community"
         },
         {
          value: "11",
          text: "Media, Publications and Journalism"
         },
         {
          value: "12",
          text: "Military"
         },
         {
          value: "13",
          text: "Music/Dance"
         },
         {
          value: "14",
          text: "Preprofessional"
         },
         {
          value: "15",
          text: "Professional Experiences"
         },
         {
          value: "16",
          text: "Research"
         },
         {
          value: "17",
          text: "Service, Public Service"
         },
         {
          value: "18",
          text: "Sports"
         },
         {
          value: "19",
          text: "Student Government"
         },
         {
          value: "20",
          text: "Other student clubs & organization"
         }
        ],
        optionsCaption: "Select your activity here"
       }
      ],
      title: "Types of Top Activity",
      isRequired: true
     },
     {
      type: "panel",
      name: "E2Panel",
      elements: [
       {
        type: "dropdown",
        name: "E2",
        title: "E2020-2: Practical Ingenuity",
        isRequired: true,
        choices: [
         {
          value: 1,
          text: "Strongly Disagree"
         },
         {
          value: 2,
          text: "Disagree"
         },
         {
          value: 3,
          text: "Agree"
         },
         {
          value: 4,
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "E3",
        title: "E2020-3: Creativity",
        isRequired: true,
        choices: [
         {
          value: 1,
          text: "Strongly Disagree"
         },
         {
          value: 2,
          text: "Disagree"
         },
         {
          value: 3,
          text: "Agree"
         },
         {
          value: 4,
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "E4",
        title: "E2020-4: Communication",
        isRequired: true,
        choices: [
         {
          value: 1,
          text: "Strongly Disagree"
         },
         {
          value: 2,
          text: "Disagree"
         },
         {
          value: 3,
          text: "Agree"
         },
         {
          value: 4,
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "E5",
        title: "E2020-5: Business and Management",
        isRequired: true,
        choices: [
         {
          value: 1,
          text: "Strongly Disagree"
         },
         {
          value: 2,
          text: "Disagree"
         },
         {
          value: 3,
          text: "Agree"
         },
         {
          value: 4,
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "E6",
        title: "E2020-6: Leadership",
        isRequired: true,
        choices: [
         {
          value: 1,
          text: "Strongly Disagree"
         },
         {
          value: 2,
          text: "Disagree"
         },
         {
          value: 3,
          text: "Agree"
         },
         {
          value: 4,
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "E7",
        title: "E2020-7: High Ethical Standards",
        isRequired: true,
        choices: [
         {
          value: 1,
          text: "Strongly Disagree"
         },
         {
          value: 2,
          text: "Disagree"
         },
         {
          value: 3,
          text: "Agree"
         },
         {
          value: 4,
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "E8",
        title: "E2020-8: Professionalism",
        isRequired: true,
        choices: [
         {
          value: 1,
          text: "Strongly Disagree"
         },
         {
          value: 2,
          text: "Disagree"
         },
         {
          value: 3,
          text: "Agree"
         },
         {
          value: 4,
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       },
       {
        type: "dropdown",
        name: "E9",
        title: "E2020-9: Dynamism, Agility, Resilience, and Flexibility",
        isRequired: true,
        choices: [
         {
          value: 1,
          text: "Strongly Disagree"
         },
         {
          value: 2,
          text: "Disagree"
         },
         {
          value: 3,
          text: "Agree"
         },
         {
          value: 4,
          text: "Strongly Agree"
         }
        ],
        optionsCaption: "Select your opinion here"
       }
      ],
      title: "Engineering 2020 Outcomes",
      isRequired: true
     }
    ],
    title: "Outcomes"
   },
   {
    name: "page5",
    elements: [
     {
      type: "panel",
      name: "contactInfoPanel",
      elements: [
       {
        type: "text",
        name: "phone",
        title: "Phone Number",
        inputType: "tel",
        placeHolder: "Enter your phone number here"
       }
      ],
      title: "Contact Information",
      description: "Would you mind receiving future questions about this survey? If so, would you mind sharing your phone number below?"
     }
    ],
    title: "Other"
   }
  ],
  triggers: [
   {
    type: "complete"
   },
   {
    type: "complete",
    expression: "{consentQuestion} = \"disagree\""
   }
  ],
  showProgressBar: "top"
 }