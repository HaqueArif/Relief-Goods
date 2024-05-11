import Container from "@/components/Container";
import Stories from "./Stories";
import Comments from "./Comments";

const GratitudeWall = () => {
  // Function to handle change in the input field for new comment

  return (
    <Container className="py-40">
      <div>
        {/* <h1 className="text-slate-500 italic">Community Gratitude Wall</h1> */}
        <p className="text-2xl text-justify italic border p-3">
          Welcome to our Community Gratitude Wall! In times of hardship, it's
          important to acknowledge the support and kindness we receive from
          others. This wall is a place where individuals can express their
          appreciation for the assistance they've received during difficult
          times.
        </p>
        <div className="my-5">
          <h2 className="text-slate-500 font-bold text-3xl">
            Featured Stories
          </h2>
          <p className="text-xl mb-5">
            Read some heartwarming stories from individuals and communities who
            have benefited from the support provided through our relief goods
            website. These stories highlight the impact of generosity and
            kindness during challenging times.
          </p>
          <div>
            <Stories />
          </div>
        </div>

        <Comments />
        <div className="my-5 italic text-lg text-gray-500">
          <h2>Filter and Moderation</h2>
          <p>
            All comments on the gratitude wall are subject to moderation to
            ensure a respectful and supportive environment for all users. Please
            adhere to our community guidelines when posting your message of
            gratitude.
          </p>
        </div>
        <div className="my-5 italic text-lg text-gray-500">
          <h2 className="text-2xl">Community Guidelines</h2>
          <p>
            Before posting on the gratitude wall, please review our community
            guidelines. We encourage respectful communication and ask that you
            refrain from sharing sensitive personal information.
          </p>
        </div>
        <div className="my-5 italic text-lg text-gray-500">
          <h2 className="text-2xl">Interactive Features</h2>
          <p>
            Participate in our gratitude journal prompt and reflect on specific
            prompts related to gratitude. Your insights and reflections can
            inspire others and foster a deeper sense of connection within the
            community.
          </p>
        </div>
        <div className="my-5 italic text-lg text-gray-500">
          <h2 className="text-2xl">Shareable Content</h2>
          <p>
            Spread the positivity by sharing your gratitude wall post on social
            media. Invite others to contribute their messages of appreciation
            and help us build a supportive community network.
          </p>
        </div>
        <div className="my-5 italic text-lg text-gray-500">
          <h2 className="text-2xl">Updates and Announcements</h2>
          <p>
            Check back regularly for updates and announcements related to
            community support initiatives. Together, we can make a difference
            and provide assistance to those in need.
          </p>
        </div>
        <div className="my-5 italic text-lg text-gray-500">
          <h2 className="text-2xl">Call to Action</h2>
          <p>
            Help us grow our community gratitude wall by inviting others to
            participate. Share the link to this page and encourage friends and
            family to contribute their messages of gratitude.
          </p>
          <p>
            Thank you for being part of our community and for sharing your
            appreciation for the support you've received. Together, we can make
            a positive impact and support each other through difficult times.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default GratitudeWall;
