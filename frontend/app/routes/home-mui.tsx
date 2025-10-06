import type { Route } from "./+types/home";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link as MUILink, Stack, Typography } from "@mui/material";
import { Link } from "react-router";
import type { BlogPostList } from "~/types";
import { useBlogPosts } from "~/features/blog/useBlogPosts";
import { useBlogPost } from "~/features/blog/useBlogPost";
import { capitalise, getValidImageSrc } from "~/lib/utils";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Home - MUI" },
        { name: "description", content: "Thehome page built with MUI" },
    ];
}

type ArticleCardProps = {
    post: BlogPostList
}

const ArticleCard = ({ post }: ArticleCardProps) => {
    const { img, title, author, tags } = post

    const src = getValidImageSrc(img)
    return (
        <Card sx={{ boxShadow: 'none', padding: 0 }}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        md: '3fr 2fr',
                        xs: '1fr',
                    },
                    gap: {
                        xs: 2,
                        md: 0,
                    },

                    alignItems: 'stretch',
                }}
            >
                <Box
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        order: {
                            xs: 1,
                            md: 0,
                        }
                    }}
                >
                    <CardContent sx={{ padding: 0 }}>
                        <CardActions sx={{ padding: 0 }}>
                            <Typography variant="subtitle2" sx={{ color: '#1a3fe2', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }} >{capitalise(tags[0])}</Typography>
                            <Typography variant="subtitle2" >•</Typography>
                            <Typography variant="subtitle2" >{author}</Typography>
                        </CardActions>
                        <Typography gutterBottom variant="h6" component="div" sx={{
                            fontFamily: '"Playfair Display", "Georgia", "Times New Roman", Times, serif',
                            fontWeight: 'semibold'
                        }}>
                            {title}
                        </Typography>
                    </CardContent>
                </Box>
                <Box
                    sx={{
                        width: '100%',

                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: {
                            xs: 0,
                            md: 2,
                        },
                        order: {
                            xs: 0,
                            md: 1,
                        }
                    }}
                >
                    <img src={src} />
                </Box>
            </Box>
        </Card >
    )
}

export default function HomeMUI() {
    const [first, ...rest] = useBlogPosts()
    const detailedPost = useBlogPost(first.id)
    const { img, title, content, publishedAt, author, tags, readTime } = detailedPost


    return <Box sx={{
        flexGrow: 1,
    }}>
        <Grid container spacing={6}>
            {/* Main Article */}
            <Grid
                container
                spacing={2}
                size={{
                    xs: 12,
                    lg: 12 / 5 * 3,
                }}
                sx={{
                    display: {
                        xs: 'inherit',
                        md: 'grid',
                        lg: 'inherit',
                    },
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '1fr 1fr',
                        lg: '1fr',
                    },
                    gridTemplateRows: {
                        xs: 'inherit',
                        md: 'auto auto auto',
                        lg: 'auto',
                    },
                }}
            >
                <Box
                    sx={{
                        gridRow: {
                            xs: 'inherit',
                            md: '1 / -1',
                            lg: '1 / 2',
                        },
                        width: '100%',
                        height: 'inherit',
                        position: {
                            xs: 'inherit',
                            md: 'relative',
                            lg: 'inherit',
                        },
                        minHeight: 0,
                    }}
                >
                    <Box
                        component="img"
                        src={img}
                        alt=""
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            position: {
                                xs: 'inherit',
                                md: 'absolute',
                                lg: 'inherit',
                            },
                            top: 0,
                            left: 0,
                        }}
                    />
                </Box>
                <Grid container spacing={2} >
                    {tags.split(',').map(tag => {
                        return <>
                            <MUILink component={Link} to={`/blog/${tag}`} underline="hover">
                                {capitalise(tag)}
                            </MUILink>
                            <p>•</p>
                        </>
                    })}
                    <p>{author}</p>
                </Grid>
                <Typography variant="h4" component="h1" sx={{
                    fontFamily: '"Playfair Display", "Georgia", "Times New Roman", Times, serif',
                    fontWeight: 'semibold'
                }}>
                    {title}
                </Typography>
                <Typography variant="body1" component="p" sx={{
                    fontFamily: '"Inter", "Georgia", "Times New Roman", Times, serif',
                    fontWeight: 'normal'
                }}>
                    {content}
                </Typography>
            </Grid>

            {/* Side articles */}

            <Grid size={{
                xs: 12,
                lg: 12 / 5 * 2,
            }}>
                {/* Stay informed */}
                <Box
                    sx={{
                        backgroundColor: '#f3f4f6',
                        p: 4,
                        display: { xs: 'none', lg: 'block' },
                        mb: 4,
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontFamily: '"Playfair Display", "Georgia", "Times New Roman", Times, serif',
                            fontWeight: 500,
                            fontSize: '2rem',
                            mb: 2,
                        }}
                    >
                        Stay informed
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: '"Inter", "Georgia", "Times New Roman", Times, serif',
                            mb: 3,
                        }}
                    >
                        Get the best journalism every day with plans starting at less than $2/week. Cancel anytime.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ fontWeight: 500 }}
                    >
                        Subscribe
                    </Button>
                </Box>

                <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column" gap={4}>

                    {rest.map(post => {

                        return <ArticleCard post={post} />
                    })}
                </Box>

            </Grid>

            {/* Banner */}
            <Grid container size={12} sx={{
                backgroundColor: '#fbefbf',
                alignItems: 'center',
            }}>
                <Grid size={7}>
                    <Stack spacing={2} sx={{ p: 4 }}>
                        <Typography
                            variant="h3"
                            component="h1"
                            sx={{
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: 500,
                                fontSize: '2.5rem',
                                lineHeight: 1.2
                            }}
                        >
                            Subscribe and enjoy unlimited digital access
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '1.1rem'
                            }}
                        >
                            Get the best journalism every day with plans starting at less than $2/week.{' '}
                            <Typography
                                component="span"
                                sx={{ fontStyle: 'italic' }}
                            >
                                Cancel anytime.
                            </Typography>
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                alignSelf: 'flex-start',
                                mt: 2
                            }}
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
                <Grid size={5} sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    pr: 4,
                    mt: 'auto',
                }}>
                    <img
                        src='/ufo.png'
                        alt="UFO illustration"
                    />
                </Grid>
            </Grid>
        </Grid>
    </Box>

}