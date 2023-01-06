import Container from "../../general/Container";
import HeadingBox from "./HeadingBox";

const Services = () => {
  return (
    <section>
      <Container>
        <div className="py-20">
          <div className="mb-20">
            <HeadingBox
              heading="THE BEST SERVICES"
              subheading="Featured Products"
              description="Problems trying to resolve the conflict between "
            />
          </div>
          <div className="grid lg:grid-cols-3"></div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
