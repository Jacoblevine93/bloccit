const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("Topic", () => {

  beforeEach((done) => {
//#1
    this.topic;
    sequelize.sync({force: true}).then((res) => {

//#2
      Topic.create({
        title: "Expeditions to Alpha Centauri",
        description: "A compilation of reports from recent visits to the star system."
      })
      .then((topic) => {
        this.topic = topic;
        done();
        })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });


 describe("#create()", () => {

     it("should create a topic object with a title, and description", (done) => {
//#1
       Topic.create({
         title: "Topic 1",
         description: "Decription 1",
       })
       .then((topic) => {

//#2
         expect(topic.title).toBe("Topic 1");
         expect(topic.description).toBe("Decription 1");
         done();

       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });

   it("should not create a post with missing title, or description", (done) => {
     Topic.create({
       title: "Topic 1"
     })
     .then((topic) => {

      // the code in this block will not be evaluated since the validation error
      // will skip it. Instead, we'll catch the error in the catch block below
      // and set the expectations there

       done();

     })
     .catch((err) => {

       expect(err.message).toContain("Topic.description cannot be null");
       done();

     });
   });       
 });       

describe("#getPosts()", () => {

	it("should return a list of associated posts", (done) => {

       this.topic.getPosts()
       .then((postList) => {
         expect(postList).toEqual([1, undefined]);
         done();
       });

     });

   });

});  