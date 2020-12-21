import React from "react"
import Layout from "../components/Layout"
import { makeStyles, useTheme } from '@material-ui/core/styles';

const Styles =
      {
        container: {
        marginBottom: '50px',
        padding: '20px',
        '& p': {
          fontSize: '20px',
        },
        '& h1': {
          fontSize: '40px',
          textTransform: 'uppercase',
          letterSpacing: 'normal',
          lineHeight: 'normal',
        },
    
        '& h2': {
          fontSize: '35px',
          textTransform: 'none',
          marginTop: '0',
        },
        '& h3': {
          fontSize: '30px',
          textAlign: 'center',
        }
      },
      contact: {
        display: 'flex',
        justifyContent: 'space-around',
      }
    }

export default Styles
    