## Redux

With context API we cannot modify state directly. We must dispatch action in context, and reducer handles the action and returns a **new** state (not modifying the existing state). With Redux we can either modify the existing state and return the updated, or return a brand new state

- **store** is the single source of truth
