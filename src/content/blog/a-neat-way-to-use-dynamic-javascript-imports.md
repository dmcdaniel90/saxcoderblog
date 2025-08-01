---
title: "A neat way to use dynamic JavaScript imports "
excerpt: Conditionals can be used in combination with dynamic imports to allow
  more modular code.
publishDate: 2025-08-01T13:33:00.000+01:00
updatedDate: 2025-08-01T13:33:00.000+01:00
isFeatured: true
tags:
  - javascript
  - code-snippet
seo:
  image:
    src: https://miro.medium.com/v2/resize:fit:1024/1*VqO8QQaI4thLx3F87Nd4Rw.jpeg
    alt: Dynamic imports in JavaScript
---
### Continued learning while job searching

While I search for new work, I'm making sure to keep up my continued learning by learning new skills through mini-projects and improving on older ones. Today, I have been working on a Node CLI app that I used to convert CSV data into JSON. In my data internship a couple months ago, I did plenty of converting this data into SQL tables, but I find JSON just really easy to work with, so it seemed like a fun idea to make a simple tool for it.

I'll go into more detail about the project in another post, but today I want to to demonstrate a neat solution to a (probably common) problem.

### Function dependencies

I have a function `parseCsvToJson` that uses a utility function called `blankline` to simply log a blank line to the console. I have this utility function in a file called `functions.ts`, containing other functions I may need. This works, but it means that the `parseCsvToJson` function is dependent on `functions.ts`.

```typescript
import { blankLine } from '../functions.js'

export default function parseCsvToJson(filePath: string) {
    // Code...
}f
```

### Dynamic imports

```typescript
const { blankLine } = await import('../functions.js')

### Conditional Operators
```
