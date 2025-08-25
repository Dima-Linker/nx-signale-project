import { ArticleDto } from '../../application/dto/article.dto'


export const mockArticles: ArticleDto[] = [
  {
    id: 1,
    created_at: '2025-08-25T12:00:00Z',
    authorId: 1,
    email: 'user1@example.com',
    author: 'User One',
    title: 'Sample Article 1',
    content: 'This is the first sample article content.',
    comments: [
      {
        authorId: 2,
        author: 'User Two',
        text: 'Great article!',
      },
    ],
  },
  {
    id: 2,
    created_at: '2025-08-24T09:30:00Z',
    authorId: 3,
    email: 'user3@example.com',
    author: 'User Three',
    title: 'Sample Article 2',
    content: 'This is the second sample article content.',
    comments: [
      {
        authorId: 1,
        author: 'User One',
        text: 'Nice work!',
      },
      {
        authorId: 4,
        author: 'User Four',
        text: 'Very informative.',
      },
    ],
  },
];
