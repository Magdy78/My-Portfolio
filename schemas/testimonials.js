export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'comapany',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURl',
            type: 'image',
            options :{
                hotspot: true, //user able to use crop while using images
            }
        },
        {
            name : 'feedback',
            title : 'Feedback',
            type : 'string'
    },

    ]
}