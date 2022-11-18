import { Box, Flex, Title, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <Box
      sx={{
        background: "rgba(79, 209, 197, 0.14)",
        margin: "10rem auto",
      }}
    >
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        sx={{ padding: "4rem 0" }}
      >
        <Title>What Client Says</Title>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, repellat
          doloribus nisi delectus quisquam
        </Text>

        <Box sx={{ width: "90%" }}>
          <Carousel
            slideSize="33.33%"
            slideGap="xl"
            loop
            slidesToScroll={1}
            sx={{ width: "100%", margin: "auto" }}
            dragFree
          >
            <Carousel.Slide>
              <TestimonialCard
                image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                rate={4.5}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos, voluptas maiores asperiores"
                name="John Doe"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <TestimonialCard
                image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                rate={4}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos, voluptas maiores asperiores"
                name="John Doe"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <TestimonialCard
                image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                rate={4}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos, voluptas maiores asperiores"
                name="John Doe"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <TestimonialCard
                image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                rate={4}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos, voluptas maiores asperiores"
                name="John Doe"
              />
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Flex>
    </Box>
  );
}

export default Testimonial;
