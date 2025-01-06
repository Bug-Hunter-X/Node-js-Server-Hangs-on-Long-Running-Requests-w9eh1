# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a server hangs or becomes unresponsive when processing long-running requests.  The problem is caused by the server's single-threaded nature, which means it can only handle one request at a time.  If a request takes a long time to complete, subsequent requests will be blocked until the first one finishes.

The `server.js` file contains the buggy code.  The `serverSolution.js` file provides a solution using techniques like worker threads to address this issue.  See the detailed explanation in the comments within the code.