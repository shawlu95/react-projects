## Redux

With both context API and Redux we cannot modify state directly. We must dispatch action in context, and reducer handles the action and returns a **new** state (not modifying the existing state).

- **store** is the single source of truth
- **dispatch** action with a type property (string) and payload
