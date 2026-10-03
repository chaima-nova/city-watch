<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- All screens read data only through query options in `src/lib/data/api.ts` typed by `src/lib/data/types.ts`; never hard-code domain data in UI — keeps the backend swappable.
- With no backend configured (`VITE_ECOGUARDIAN_API` unset) fetchers return empty results and screens show honest empty states — the product must never display invented data.
- Demo requests use a dedicated `/contact` route with an explicit unavailable-delivery state until a real service is connected — prevents false submission claims.
