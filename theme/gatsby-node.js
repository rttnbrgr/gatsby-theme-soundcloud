const fs = require('fs');

// make sure the data directory exists
exports.onPreBootstrap = ({reporter}, options) => {
    const contentPath = options.contentPath || 'data';

    if (!fs.existsSync(contentPath)) {
        reporter.info(`creating the ${contentPath} directory`)
        fs.mkdirSync(contentPath);
    }
}

// define the event type
exports.sourceNodes = ({actions}) => {
    actions.createTypes(`
        type Track implements Node @dontInfer {
            id: String!
            title: String!
            trackType: String! @proxy(from: "track_type")
            streamUrl: String! @proxy(from: "stream_url")
            createdAt: Date! @dateformat @proxy(from: "created_at")
            slug: String!
            duration: Date @dateformat
            commentable: Boolean
            state: String
            sharing: String
            tagList: String @proxy(from: "tag_list")
            permalink: String
            description: String
            streamable: Boolean
            downloadable: Boolean
            genre: String
            release: Date @dateformat
            purchaseUrl: String @proxy(from: "purchase_url")
            labelId: Int @proxy(from: "label_id")
            labelName: String @proxy(from: "label_name")
            isrc: Boolean
            videoUrl: String @proxy(from: "video_url")
            trackType: String @proxy(from: "track_type")
            keySignature: String @proxy(from: "key_signature")
            bpm: Int
            title: String
            releaseYear: Int @proxy(from: "release_year")
            releaseMonth: Int @proxy(from: "release_month")
            releaseDay: Int @proxy(from: "release_day")
            originalFormat: String @proxy(from: "original_format")
            license: String
            uri: String
            permalinkUrl: String @proxy(from: "permalink_url")
            artworkUrl: String @proxy(from: "artwork_url")
            waveformUrl: String @proxy(from: "waveform_url")
            streamUrl: String @proxy(from: "stream_url")
            downloadUrl: String @proxy(from: "download_url")
            playbackCount: Int @proxy(from: "playback_count")
            downloadCount: Int @proxy(from: "download_count")
            favoritingsCount: Int @proxy(from: "favoritings_count")
            commentCount: Int @proxy(from: "comment_count")
            attachmentsUri: String @proxy(from: "attachments_uri")
        }
    `)
}

// define resolver for any custom fileds (slug)
exports.createResolvers = ({createResolvers}, options) => {
    const basePath = options.basePath || '/';
    const slugify = str => {
        const slug = str
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '')

        return `/${basePath}/${slug}`.replace(/\/\/+/g, '/')
    }

    createResolvers({
        Track: {
            slug: {
                resolve: source => slugify(source.title)
            }
        }
    })
}

// query for tracks and create pages
exports.createPages = async ({actions, graphql, reporter}, options) => {
    const basePath = options.basePath || '/';
    actions.createPage({
        path: basePath,
        component: require.resolve('./src/templates/tracks.js')
    })

    const result = await graphql(`
        query {
            allTrack(sort: {fields: createdAt, order: ASC}) {
                nodes {
                    id
                    slug
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panic('error loading tracks', reporter.errors)
        return;
    }

    const tracks = result.data.allTrack.nodes;
    tracks.forEach(track => {
        const slug = track.slug;
        actions.createPage({
            path: slug,
            component: require.resolve('./src/templates/track.js'),
            context: {
                trackId: track.id
            }
        })
    })


  console.log("ITS ALIVE!!!")
}