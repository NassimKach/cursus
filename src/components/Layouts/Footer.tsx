import { Box, Flex, Text } from "@mantine/core";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import FooterTitle from "../Footer/FooterTitle";
import { BsFillTelephoneFill } from "react-icons/bs";
import FooterFlex from "../Footer/FooterFlex";
import SubscribeInput from "../Subscribe/SubscribeInput";

function Footer({ display }: { display: string }) {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        background: theme.colors.tertiaryColor[0],
        color: theme.colors.textColor[1],
      })}
    >
      <SubscribeInput display={display} />
      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="start"
        direction="row"
        sx={{
          width: "90%",
          margin: "0 auto",
          padding: "10rem 0 2rem 0",
          flexWrap: "wrap",
        }}
      >
        <FooterFlex>
          <FooterTitle title="cursus" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
            sit maxime maiores nostrum eligendi
          </Text>
          <Flex gap="sm" justify="center" align="center" direction="row">
            <BsFillTelephoneFill color="#4FD1C5" />
            <Text>+212 601 23 45</Text>
          </Flex>
        </FooterFlex>

        <FooterFlex>
          <FooterTitle title="Other Pages" />
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Blog</Text>
        </FooterFlex>

        <FooterFlex>
          <FooterTitle title="Quick Links" />
          <Text>Privacy Policy</Text>
          <Text>Terms and conditions</Text>
          <Text>Cookies Policy</Text>
          <Flex
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <FaFacebook />
            <AiFillTwitterCircle />
            <FaLinkedinIn />
          </Flex>
        </FooterFlex>

        <FooterFlex>
          <FooterTitle title="Location" />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.744786484996!2d-10.070431385431831!3d28.994932774338086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb503d72d5c1afb%3A0x6847398c7134dc9a!2sISTA%20NTIC%20Guelmim!5e0!3m2!1sen!2suk!4v1668172917509!5m2!1sen!2suk"
            width="100"
            height="100"
          ></iframe> */}
        </FooterFlex>
      </Flex>
      <Text align="center" sx={{ padding: "0 0 1rem 0" }}>
        Ⓒ Cursus 2022
      </Text>
    </Box>
  );
}

export default Footer;
