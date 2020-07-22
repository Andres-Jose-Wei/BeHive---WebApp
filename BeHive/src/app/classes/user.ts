import { Skill } from './skill';
import { Position } from './position';
import { Group } from './group';
import { Review } from './review';

export class User {
        /**
         * A user’s id
         */
        id: string;
        /**
         * A user’s username
         */
        username: string;
        /**
         * A user’s username
         */
        password: string;
        /**
         * A user’s email
         */
        email: string;
        /**
         * A user’s first name
         */
        firstName: string;
        /**
         * A user’s last name
         */
        lastName: string;
        /**
         * A user’s skills and the ratings for each skill
         */
        skillRatings: Map<Skill, Array<number>>;
        /**
         * A user’s skills and their average rating for each skill
         */
        skillStats: Map<Skill, number>;
        /**
         * A user’s rating within the position
         */
        overallRating: number;
        /**
         * A user’s personal skill rating
         */
        personalSkillAvg: number;
        /**
         * A user’s technical skill rating
         */
        technicalSkillAvg: number;
        /**
         * A user’s position within a group
         */
        position: Position;
        /**
         * A user’s group
         */
        group: Group; // a user’s company or department
        /**
         * A user’s reviews from their superiors
         */
        reviews: Map<string, Array<Review>>;
        /**
         * The percentage of how many times a user completed all their tasks on time
         */
        punctuality: number;
        /**
         * The number of reviews for a user
         */
        reviewsCount: number;
        /**
         * The number of unique reviewers for a user
         */
        uniqueReviewersCount: number;
        /**
         * The number of times a user was awarded “Most Valuable Programmer” of their
         * team after their project was completed
         */
        mvpCount: number;
        /**
         * The number of projects a user worked on
         */
        projectCount: number;
        /**
         * Whether or not a user is already working on a project
         */
        isAvailable: false;

        constructor(firstname: string, lastname: string, email: string, username: string , password: string, group: string)
        {
            this.firstName = firstname;
            this.lastName = lastname;
            this.email = email;
            this.username = username;
            this.password = password;
            this.group = new Group(group);
        }
}
