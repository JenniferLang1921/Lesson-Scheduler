//state
export const state = () => ({
  lessons: [
    {
      id: 1,
      date: "February 22, 2021",
      time: "11:30:00",
      employee: "Smith",
      gender: "male"
    },
    {
      id: 2,
      date: "February 23, 2021",
      time: "2:30:00",
      employee: "Jackson",
      gender: "female"
    },
    {
      id: 3,
      date: "February 24, 2021",
      time: "5:30:00",
      employee: "Hill",
      gender: "male"
    },
    {
      id: 4,
      date: "February 25, 2021",
      time: "16:30:00",
      employee: "Snow",
      gender: "female"
    },

  ],
  cart: [],
  students: [
    {
      first_name: "First",
      last_name: "Kinder",
      instructor_gender: "Any",
      id: 40057,
      level_id: 18
    },
    {
      first_name: "Second",
      last_name: "Kinder",
      instructor_gender: "Any",
      id: 40831,
      level_id: 9
    }
  ],
  events: [
    {
      "date": "2021-02-10",
      "times": [
        {
          "time": "16:00:00",
          "students": [
            {
              "student_id": 40831,
              "opening_id": 34568,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Zaira Guerrero",
                  "partial_full_name": "Zaira G.",
                  "id": 279,
                  "first_name": "Zaira",
                  "last_name": "Guerrero",
                  "gender": "Female",
                  "default_location_id": 10
                },
                "level": {
                  "id": 9,
                  "group_id": null,
                  "name": "Bold Blue 1",
                  "abbreviation": "BO1",
                  "color": "3200ff",
                  "min_age": 6,
                  "max_age": 13,
                  "sort": 8
                },
                "lane": null,
                "id": 34568,
                "day_of_week": 3,
                "start_date": "2020-11-15",
                "start_time": "16:00:00",
                "end_time": "16:30:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-10",
              "end_date": null
            },
            {
              "student_id": 40057,
              "opening_id": 34880,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Lucia Torres",
                  "partial_full_name": "Lucia T.",
                  "id": 250,
                  "first_name": "Lucia",
                  "last_name": "Torres",
                  "gender": "Female",
                  "default_location_id": 10
                },
                "level": {
                  "id": 18,
                  "group_id": null,
                  "name": "Bold Blue 3",
                  "abbreviation": "BO3",
                  "color": "20ab13",
                  "min_age": null,
                  "max_age": null,
                  "sort": 10
                },
                "lane": null,
                "id": 34880,
                "day_of_week": 3,
                "start_date": "2020-11-15",
                "start_time": "16:00:00",
                "end_time": "16:30:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-10",
              "end_date": null
            }
          ]
        },
        {
          "time": "16:30:00",
          "students": [
            {
              "student_id": 40831,
              "opening_id": 34356,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Missael Iniguez",
                  "partial_full_name": "Missael I.",
                  "id": 175,
                  "first_name": "Missael",
                  "last_name": "Iniguez",
                  "gender": "Male",
                  "default_location_id": 10
                },
                "level": {
                  "id": null,
                  "name": "Universal",
                  "abbreviation": "U",
                  "color": "898989"
                },
                "lane": null,
                "id": 34356,
                "day_of_week": 3,
                "start_date": "2020-11-15",
                "start_time": "16:30:00",
                "end_time": "17:00:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-10",
              "end_date": null
            },
            {
              "student_id": 40057,
              "opening_id": 35131,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Elias Sotelo",
                  "partial_full_name": "Elias S.",
                  "id": 245,
                  "first_name": "Elias",
                  "last_name": "Sotelo",
                  "gender": "Male",
                  "default_location_id": 20
                },
                "level": {
                  "id": 18,
                  "group_id": null,
                  "name": "Bold Blue 3",
                  "abbreviation": "BO3",
                  "color": "20ab13",
                  "min_age": null,
                  "max_age": null,
                  "sort": 10
                },
                "lane": null,
                "id": 35131,
                "day_of_week": 3,
                "start_date": "2020-11-15",
                "start_time": "16:30:00",
                "end_time": "17:00:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-10",
              "end_date": null
            }
          ]
        }
      ]
    },
    {
      "date": "2021-02-11",
      "times": [
        {
          "time": "15:00:00",
          "students": [
            {
              "student_id": 40831,
              "opening_id": 35042,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Zaira Guerrero",
                  "partial_full_name": "Zaira G.",
                  "id": 279,
                  "first_name": "Zaira",
                  "last_name": "Guerrero",
                  "gender": "Female",
                  "default_location_id": 10
                },
                "level": {
                  "id": 9,
                  "group_id": null,
                  "name": "Bold Blue 1",
                  "abbreviation": "BO1",
                  "color": "3200ff",
                  "min_age": 6,
                  "max_age": 13,
                  "sort": 8
                },
                "lane": null,
                "id": 35042,
                "day_of_week": 4,
                "start_date": "2020-11-15",
                "start_time": "15:00:00",
                "end_time": "15:30:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-11",
              "end_date": null
            },
            {
              "student_id": 40057,
              "opening_id": 35043,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Salman Noormohammed",
                  "partial_full_name": "Salman N.",
                  "id": 210,
                  "first_name": "Salman",
                  "last_name": "Noormohammed",
                  "gender": "Male",
                  "default_location_id": 10
                },
                "level": {
                  "id": null,
                  "name": "Universal",
                  "abbreviation": "U",
                  "color": "898989"
                },
                "lane": null,
                "id": 35043,
                "day_of_week": 4,
                "start_date": "2020-11-15",
                "start_time": "15:00:00",
                "end_time": "15:30:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-11",
              "end_date": null
            }
          ]
        },
        {
          "time": "16:00:00",
          "students": [
            {
              "student_id": 40831,
              "opening_id": 34389,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Emma Rosinski",
                  "partial_full_name": "Emma R.",
                  "id": 236,
                  "first_name": "Emma",
                  "last_name": "Rosinski",
                  "gender": "Female",
                  "default_location_id": 21
                },
                "level": {
                  "id": 9,
                  "group_id": null,
                  "name": "Bold Blue 1",
                  "abbreviation": "BO1",
                  "color": "3200ff",
                  "min_age": 6,
                  "max_age": 13,
                  "sort": 8
                },
                "lane": null,
                "id": 34389,
                "day_of_week": 4,
                "start_date": "2020-11-15",
                "start_time": "16:00:00",
                "end_time": "16:30:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-11",
              "end_date": null
            },
            {
              "student_id": 40057,
              "opening_id": 34630,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Missael Iniguez",
                  "partial_full_name": "Missael I.",
                  "id": 175,
                  "first_name": "Missael",
                  "last_name": "Iniguez",
                  "gender": "Male",
                  "default_location_id": 10
                },
                "level": {
                  "id": 18,
                  "group_id": null,
                  "name": "Bold Blue 3",
                  "abbreviation": "BO3",
                  "color": "20ab13",
                  "min_age": null,
                  "max_age": null,
                  "sort": 10
                },
                "lane": null,
                "id": 34630,
                "day_of_week": 4,
                "start_date": "2020-11-15",
                "start_time": "16:00:00",
                "end_time": "16:30:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-11",
              "end_date": null
            }
          ]
        },
        {
          "time": "16:30:00",
          "students": [
            {
              "student_id": 40057,
              "opening_id": 34516,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Emma Rosinski",
                  "partial_full_name": "Emma R.",
                  "id": 236,
                  "first_name": "Emma",
                  "last_name": "Rosinski",
                  "gender": "Female",
                  "default_location_id": 21
                },
                "level": {
                  "id": 18,
                  "group_id": null,
                  "name": "Bold Blue 3",
                  "abbreviation": "BO3",
                  "color": "20ab13",
                  "min_age": null,
                  "max_age": null,
                  "sort": 10
                },
                "lane": null,
                "id": 34516,
                "day_of_week": 4,
                "start_date": "2020-11-15",
                "start_time": "16:30:00",
                "end_time": "17:00:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-11",
              "end_date": null
            },
            {
              "student_id": 40831,
              "opening_id": 34672,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Alicia Johnson",
                  "partial_full_name": "Alicia J.",
                  "id": 177,
                  "first_name": "Alicia",
                  "last_name": "Johnson",
                  "gender": "Female",
                  "default_location_id": 10
                },
                "level": {
                  "id": 9,
                  "group_id": null,
                  "name": "Bold Blue 1",
                  "abbreviation": "BO1",
                  "color": "3200ff",
                  "min_age": 6,
                  "max_age": 13,
                  "sort": 8
                },
                "lane": null,
                "id": 34672,
                "day_of_week": 4,
                "start_date": "2020-11-15",
                "start_time": "16:30:00",
                "end_time": "17:00:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-11",
              "end_date": null
            }
          ]
        },
        {
          "time": "17:30:00",
          "students": [
            {
              "student_id": 40831,
              "opening_id": 34518,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Zaira Guerrero",
                  "partial_full_name": "Zaira G.",
                  "id": 279,
                  "first_name": "Zaira",
                  "last_name": "Guerrero",
                  "gender": "Female",
                  "default_location_id": 10
                },
                "level": {
                  "id": 9,
                  "group_id": null,
                  "name": "Bold Blue 1",
                  "abbreviation": "BO1",
                  "color": "3200ff",
                  "min_age": 6,
                  "max_age": 13,
                  "sort": 8
                },
                "lane": null,
                "id": 34518,
                "day_of_week": 4,
                "start_date": "2020-11-15",
                "start_time": "17:30:00",
                "end_time": "18:00:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-11",
              "end_date": null
            },
            {
              "student_id": 40057,
              "opening_id": 34631,
              "opening": {
                "end_date": null,
                "employee": {
                  "full_name": "Missael Iniguez",
                  "partial_full_name": "Missael I.",
                  "id": 175,
                  "first_name": "Missael",
                  "last_name": "Iniguez",
                  "gender": "Male",
                  "default_location_id": 10
                },
                "level": {
                  "id": 18,
                  "group_id": null,
                  "name": "Bold Blue 3",
                  "abbreviation": "BO3",
                  "color": "20ab13",
                  "min_age": null,
                  "max_age": null,
                  "sort": 10
                },
                "lane": null,
                "id": 34631,
                "day_of_week": 4,
                "start_date": "2020-11-15",
                "start_time": "17:30:00",
                "end_time": "18:00:00",
                "location_id": 10
              },
              "type": {
                "id": 1,
                "name": "Weekly Lesson",
                "duration": null,
                "schedule_type": {
                  "id": 1,
                  "name": "Perpetual",
                  "repeats": "weekly"
                }
              },
              "start_date": "2021-02-11",
              "end_date": null
            }
          ]
        }
      ]
    },
  ]
})

//getters
export const getters = {
getEventByDetails: (state) => (time, full_name, gender) => {
  return state.events.find(event => event.time)
}
}
/*https://stackoverflow.com/questions/51327763/get-specific-data-from-vuex-store-while-using-a-route*/


  //actions



  //mutations
  export const mutations = {
    addItemToCart(lesson) {
      this.cart.push(lesson);
      console.log(this.cart)
    }
  }

