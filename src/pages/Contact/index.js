import React from 'react';
import { FaRegEnvelope, FaWhatsapp, FaReact } from 'react-icons/fa';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import { Container, Link, Credits } from './styles';

export default function Contact() {
  return (
    <Layout center id="contact">
      <Title>Get in touch</Title>
      <Container>
        <Link target="_blank" href="mailto:contatomerisio@gmail.com">
          <FaRegEnvelope size={16} />
          ruandeveloper@hotmail.com
        </Link>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5542984160407&text=Hey!%20I%20have%20some%20nice%20projects%20and%20I%20think%20you%20can%20help%20me.%20Can%20we%20talk%3F"
        >
          <FaWhatsapp size={16} />
          Feel free to send me a message.
        </Link>

        <Credits>
          Made with <FaReact color="#61dafb" size={20} /> by Ruan Linos Alves
        </Credits>
      </Container>
    </Layout>
  );
}
