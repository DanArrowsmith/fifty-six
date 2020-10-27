import React from "react"
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

  const BlogWidget = () => {

    const useStyles = makeStyles(theme => ({


      blurbContainer:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
        '@media (min-width:650px)':{
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        paddingRight: '1.5rem',
        paddingLeft: '1.5rem',
        paddingBottom: '2rem',
      },
      title:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      },


      text:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: ' center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        '@media (min-width:650px)':{
          width:'50vw',
        },
      },

      image:{
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '2rem',
        '@media (min-width:650px)':{
          width:'50vw',
        },
      },

      }));

    const classes = useStyles();

    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "images/turtle_leo.png" }) {
          childImageSharp {
            fluid(maxWidth:500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
          <div className={classes.blurbContainer}>
            <div className={classes.title}>
            <h3 style={{marginTop:0, marginBottom:0}}>Articles</h3>
            </div>
            <Card className={classes.root} variant="outlined">
              <CardActionArea>

              <Img fluid={data.file.childImageSharp.fluid} />

                <CardContent>
                  <h4>
                    Turtles in Koh Tao
                  </h4>
                  <p>
                  Some turtle shit going down here.Some turtle shit going down here.Some turtle shit going down here.Some turtle shit going down here.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="large" color="secondary">
                  Read More
                </Button>
              </CardActions>
            </Card>

            <div className={classes.title}>
            <h4 style={{marginTop:0, marginBottom:0}}>Follow our blog for even more articles...</h4>
            <Button size="large" color="secondary" variant="contained">
              Blog
            </Button>
            </div>

          </div>




    )
  }

export default BlogWidget
