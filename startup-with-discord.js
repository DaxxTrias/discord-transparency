mainWindow.webContents.on("did-finish-load", () => {
  mainWindow.webContents.executeJavaScript(Buffer.from('IWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIHIobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciBvPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHIpLG8ubD0hMCxvLmV4cG9ydHN9ci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7InVuZGVmaW5lZCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZToiTW9kdWxlIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiYib2JqZWN0Ij09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobiwiZGVmYXVsdCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmInN0cmluZyIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKXIuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsImEiLHQpLHR9LHIubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sci5wPSIiLHIoci5zPTMpfShbZnVuY3Rpb24oZSl7ZS5leHBvcnRzPUpTT04ucGFyc2UoJ3siYSI6ImJvZHkge3BhZGRpbmctdG9wOiAyMHB4O2ZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7fS5UUkFOU1BBUkVOQ1lfX0FDVElPTiB7d2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO2hlaWdodDogMjAwcHg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO21hcmdpbjogMjBweDtsaW5lLWhlaWdodDogMjAwcHg7Y29sb3I6IHdoaXRlO2N1cnNvcjogcG9pbnRlcjtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjt0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGxpbmVhcjt9LlRSQU5TUEFSRU5DWV9fQUNUSU9OLS1BQ1RJVkUge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTt9IiwiYiI6IiNUUkFOU1BBUkVOQ1lfX0lNQUdFLUxJTksge3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDogNDBweDt3aWR0aDogMzAwcHg7bWFyZ2luLXRvcDogMTBweDtib3JkZXI6IDA7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO2JvcmRlci1yYWRpdXM6IDUwcHg7Y29sb3I6IHdoaXRlO2ZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7fXB7Zm9udC1zaXplOjExcHg7bGluZS1oZWlnaHQ6IDIwcHg7cGFkZGluZzogMTBweDtib3JkZXItcmFkaXVzOiAyMHB4O2NvbG9yOiB3aGl0ZTttYXJnaW46IDA7Zm9udC1mYW1pbHk6IHN5c3RlbS11aTt3aWR0aDogMzEwcHg7bWFyZ2luLXRvcDogMTBweDtvcGFjaXR5OiAwLjg7fSIsImMiOiIjVFJBTlNQQVJFTkNZX19TTElERS1CUklHSFRORVNTIHt3aWR0aDozMDBweDt9I1RSQU5TUEFSRU5DWV9fU0FWRS1CUklHSFRORVNTIHtoZWlnaHQ6IDQwcHg7d2lkdGg6IDE1MHB4O21hcmdpbi10b3A6IDEwcHg7Ym9yZGVyOiAwO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtib3JkZXItcmFkaXVzOiA1MHB4O2NvbG9yOiB3aGl0ZTtmb250LWZhbWlseTogc3lzdGVtLXVpO2N1cnNvcjpwb2ludGVyO30ifScpfSxmdW5jdGlvbihlKXtlLmV4cG9ydHM9SlNPTi5wYXJzZSgneyJjIjoiV2VsY29tZSEgPGJyPjxicj5UbyB0b2dnbGUgdGhlIGFjdGlvbnMgcGFuZWwsIHByZXNzIDxiPkNUUkwgKyBTSElGVCArIFg8L2I+PGJyPlRvIHRvZ2dsZSB0aGUgdGhlbWUsIHByZXNzIDxiPkNUUkwgKyBEPC9iPiIsImIiOiI8Yj7wn5uRIFdhcm5pbmc8L2I+PGJyPjxicj5Zb3VyIHNpZGViYXIgaXMgY3VycmVudGx5IGRhcmsgdGhlbWVkLjxicj5Gb3IgcHJvcGVyIHRleHQgdmlzaWJpbGl0eSwgZGlzYWJsZSBpdHMgZGFyayB0aGVtZSBpbiBTZXR0aW5ncyA+IEFwcGVhcmFuY2UuIDx1Pk5vIG5lZWQgdG8gcmVmcmVzaDwvdT4uIiwiYSI6IvCfm5EgVGhlIGltYWdlIHlvdSB3YW50IGFzIHlvdXIgYmFja2dyb3VuZCBtdXN0IGJlIHNlbnQgYXMgYSBtZXNzYWdlIG9uIERpc2NvcmQuIFlvdSB3aWxsIGhhdmUgdG8gY2xpY2sgb24gdGhlIGltYWdlLCBwcmVzcyBvbiA8T3BlbiBvcmlnaW5hbD4sIGFuZCBjb3B5IHRoZSBsaW5rIGZyb20gdGhlcmUuIn0nKX0sZnVuY3Rpb24oZSl7ZS5leHBvcnRzPUpTT04ucGFyc2UoJ3siYyI6MTAwMDAsImIiOjEwMDAwLCJhIjozMDAwfScpfSxmdW5jdGlvbihlLHQscil7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIG4oZSl7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO3JldHVybntnZXRQcm9wZXJ0eTplPT50W2VdLGdldERPTUVsZW1lbnQ6KCk9PnQsc2V0UHJvcGVydHkoZSxyKXtyZXR1cm4gdFtlXT1yLHRoaXN9LGFwcGVuZFRvKGUpe2UuYXBwZW5kQ2hpbGQodCl9fX1mdW5jdGlvbiBvKHt0ZXh0OmUsdGltZW91dDp0LGNvbnRhaW5zSFRNTDpyPSExfSl7Y29uc3Qgbz1uKCJkaXYiKTtyZXR1cm4gby5zZXRQcm9wZXJ0eSgiY2xhc3NOYW1lIiwiVFJBTlNQQVJFTkNZX19BTEVSVCIpLHI/by5zZXRQcm9wZXJ0eSgiaW5uZXJIVE1MIixlKTpvLnNldFByb3BlcnR5KCJ0ZXh0Q29udGVudCIsZSksby5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KSxuZXcgUHJvbWlzZShlPT57c2V0VGltZW91dCgoKT0+e28uc2V0UHJvcGVydHkoImNsYXNzTmFtZSIsIlRSQU5TUEFSRU5DWV9fQUxFUlQgVFJBTlNQQVJFTkNZX19BTEVSVC0tSU5BQ1RJVkUiKSxzZXRUaW1lb3V0KCgpPT57by5nZXRET01FbGVtZW50KCkucmVtb3ZlKCksZSgpfSwxZTMpfSx0KX0pfXIucih0KTtjb25zdCBhPSJ0eXBlV2luZG93cy0xemEtbjcud2l0aEZyYW1lLWhhWWx0SS50aXRsZUJhci1BQzRwR1YuaG9yaXpvbnRhbFJldmVyc2UtM3RSalk3LmZsZXgtMU8xR0tZLmRpcmVjdGlvblJvd1JldmVyc2UtbThJaklxLmp1c3RpZnlTdGFydC0yTkRGemkuYWxpZ25TdHJldGNoLURwR1BmMyI7dmFyIHM9cigxKTt2YXIgaT1yKDIpO2NsYXNzIGN7Y29uc3RydWN0b3IoZT17fSl7dGhpcy5jaGFyYWN0ZXJpc3RpY3M9bmV3IE1hcChbWyJpc0FjdGl2ZSIsITFdXSksdGhpcy5lbGVtZW50c01hcD1uZXcgTWFwO2Zvcihjb25zdFt0LHJdb2YgT2JqZWN0LmVudHJpZXMoZSkpdGhpcy5jaGFyYWN0ZXJpc3RpY3Muc2V0KHQscil9aXNBY3RpdmUoKXtyZXR1cm4gdGhpcy5jaGFyYWN0ZXJpc3RpY3MuZ2V0KCJpc0FjdGl2ZSIpfXNldEFjdGl2ZShlKXtyZXR1cm4gdGhpcy5jaGFyYWN0ZXJpc3RpY3Muc2V0KCJpc0FjdGl2ZSIsZSl9Z2V0RWxlbWVudChlKXtyZXR1cm4gdGhpcy5lbGVtZW50c01hcC5nZXQoZSl9YWRkRWxlbWVudChlLHQpe3JldHVybiB0aGlzLmVsZW1lbnRzTWFwLnNldChlLHQpLHRoaXN9cmVtb3ZlKCl7dGhpcy5jaGFyYWN0ZXJpc3RpY3Muc2V0KCJpc0FjdGl2ZSIsITEpLHRoaXMuZWxlbWVudHNNYXAuZm9yRWFjaChlPT5lLnJlbW92ZSgpKSx0aGlzLmVsZW1lbnRzTWFwLmNsZWFyKCl9fXZhciBsPXIoMCk7dmFyIHA9W3tuYW1lOiJDaGFuZ2UgdGhlIGJhY2tncm91bmQgaW1hZ2UiLGV4ZWN1dGUoe3BhcmVudEJveDplLHByb3BzOnR9KXtjb25zdCByPW4oInN0eWxlIik7ZS5zdHlsZS5vdmVyZmxvdz0iaGlkZGVuIixyLnNldFByb3BlcnR5KCJpbm5lckhUTUwiLGwuYikuYXBwZW5kVG8oZSk7Y29uc3Qgbz1uKCJpbnB1dCIpO28uc2V0UHJvcGVydHkoImlkIiwiVFJBTlNQQVJFTkNZX19JTUFHRS1MSU5LIikuc2V0UHJvcGVydHkoInBsYWNlaG9sZGVyIiwiUGFzdGUgZGlzY29yZCBpbWFnZSBsaW5rIGhlcmUiKS5zZXRQcm9wZXJ0eSgib25rZXlkb3duIixlPT57Y29uc3Qgcj1vLmdldFByb3BlcnR5KCJ2YWx1ZSIpOyJFbnRlciI9PT1lLmNvZGUmJiIiIT09ci50cmltKCkmJih0Lm1haW5TdHlsZXNoZWV0LmlubmVySFRNTCs9YCNhcHAtbW91bnR7YmFja2dyb3VuZDogdXJsKCR7cn0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7IGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDt9YCx3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oImJnSW1nIixyKSl9KS5hcHBlbmRUbyhlKTtuKCJwIikuc2V0UHJvcGVydHkoInRleHRDb250ZW50IixzLmEpLmFwcGVuZFRvKGUpfX0se25hbWU6IkNoYW5nZSB0aGUgYnJpZ2h0bmVzcyBsZXZlbCIsZXhlY3V0ZSh7cGFyZW50Qm94OmUscHJvcHM6dH0pe2NvbnN0IHI9bigiaW5wdXQiKSxhPXQuaXNEYXJrVGhlbWU/IjAsMCwwIjoiMjU1LDI1NSwyNTUiLHM9ci5nZXRET01FbGVtZW50KCk7ci5zZXRQcm9wZXJ0eSgidHlwZSIsInJhbmdlIikuc2V0UHJvcGVydHkoIm1pbiIsMCkuc2V0UHJvcGVydHkoIm1heCIsOSkuc2V0UHJvcGVydHkoImlkIiwiVFJBTlNQQVJFTkNZX19TTElERS1CUklHSFRORVNTIikuc2V0UHJvcGVydHkoInZhbHVlIix0LmJyaWdodG5lc3NMZXZlbCkuc2V0UHJvcGVydHkoIm9uaW5wdXQiLCgpPT57dC5vdmVybGF5RGFya2VuZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj1gcmdiYSgke2F9LCAuJHtzLnZhbHVlfSlgLHQub3ZlcmxheUJhckVsZW1lbnQmJih0Lm92ZXJsYXlCYXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj1gcmdiYSgke2F9LCAuJHtzLnZhbHVlfSlgKSx0LmJyaWdodG5lc3NMZXZlbD1zLnZhbHVlfSkuYXBwZW5kVG8oZSk7bigiYnV0dG9uIikuc2V0UHJvcGVydHkoImlkIiwiVFJBTlNQQVJFTkNZX19TQVZFLUJSSUdIVE5FU1MiKS5zZXRQcm9wZXJ0eSgidGV4dENvbnRlbnQiLCJTYXZlIGJyaWdodG5lc3MgbGV2ZWwiKS5zZXRQcm9wZXJ0eSgib25jbGljayIsKCk9Pnt3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oImJyZ2h0bnMiLHQuYnJpZ2h0bmVzc0xldmVsKSxvKHt0ZXh0OmBCcmlnaHRuZXNzIGxldmVsIHVwZGF0ZWQhIE5vdyBpdCBpcyBhdCBsZXZlbCA8Yj4ke3QuYnJpZ2h0bmVzc0xldmVsfTwvYj4uYCxjb250YWluc0hUTUw6ITAsdGltZW91dDppLmF9KX0pLmFwcGVuZFRvKGUpO24oInN0eWxlIikuc2V0UHJvcGVydHkoImlubmVySFRNTCIsbC5jKS5hcHBlbmRUbyhlKX19XTshZnVuY3Rpb24oKXshZnVuY3Rpb24oKXtjb25zdCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImlmcmFtZSIpO2Uuc3R5bGUuZGlzcGxheT0ibm9uZSIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKSx3aW5kb3cubG9jYWxTdG9yYWdlPWUuY29udGVudFdpbmRvdy5sb2NhbFN0b3JhZ2V9KCk7Y29uc3QgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIuIithKSx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIi5hcHAtMXExaTFFIikscj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCJ0aGVtZS1kYXJrIik7bGV0IGQ7aWYoZSlkPSFyJiZlLmNsYXNzTGlzdC5jb250YWlucygidGhlbWUtZGFyayIpO2Vsc2V7Y29uc3QgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIuYmctaDVKWV94Iik7ZSYmKGQ9IXImJmUuY2xhc3NMaXN0LmNvbnRhaW5zKCJ0aGVtZS1kYXJrIikpfWxldCBtPXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgiYnJnaHRucyIpfHw5O2NvbnN0IHU9ZnVuY3Rpb24oZSl7Y29uc3QgdD1lLmlzRGFya1RoZW1lP2ByZ2JhKDAsIDAsIDAsIDAuJHtlLmJyaWdodG5lc3NMZXZlbH0pYHx8InJnYmEoMCwwLDAsMC45KSI6YHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4ke2UuYnJpZ2h0bmVzc0xldmVsfSlgfHwicmdiYSgyNTUsMjU1LDI1NSwwLjcpIjtyZXR1cm5gLnRoZW1lLWRhcmssIC50aGVtZS1saWdodCB7LS1iYWNrZ3JvdW5kLXByaW1hcnk6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLXNlY29uZGFyeTp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtdGVydGlhcnk6dHJhbnNwYXJlbnQ7LS1jaGFubmVsdGV4dGFyZWEtYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWRlcHJlY2F0ZWQtcGFuZWwtYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtc2Vjb25kYXJ5LWFsdDp0cmFuc3BhcmVudDstLXNjcm9sbGJhci1hdXRvLXRyYWNrOnRyYW5zcGFyZW50O30udGhlbWUtZGFyayB7LS1zY3JvbGxiYXItYXV0by10aHVtYjpyZ2JhKDI1NSwyNTUsMjU1LDAuMyk7fS50aGVtZS1saWdodCB7LS1zY3JvbGxiYXItYXV0by10aHVtYjpyZ2JhKDAsMCwwLDAuNik7fSNhcHAtbW91bnQge2JhY2tncm91bmQ6dXJsKCR7ZS5iYWNrZ3JvdW5kSW1hZ2VVUkx9KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7fS4ke2F9e21hcmdpbi10b3A6MDtwYWRkaW5nLXRvcDo0cHg7YmFja2dyb3VuZDoke3R9O30uYXBwLTFxMWkxRXtiYWNrZ3JvdW5kLWNvbG9yOiAke3R9O30uY29udGFpbmVyLTFEMzRvR3tiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fS5wb3BvdXQtVmNOY0hCLCAuY29udGFpbmVyLTNYSjhucywgLmNvbnRhaW5lci0xNmoyMmssIC5wb3BvdXRDb250YWluZXItMU1YZHFOLCAucm9vdC1TUjhjUWEsIC5xdWlja3N3aXRjaGVyLTNKYWdWRSwgLmNvZGUuaW5saW5lLCAubWFya3VwLTJCT3ctaiBjb2RlLCBjb2RlLCAuYXR0YWNobWVudC0zM09GajAsIC5yZWNlbnRNZW50aW9uc1BvcG91dC0zckNpSTYsIC5jaGFubmVsSGVhZGVyLTNHZDJ4cSwgLmNvbnRlbnRXcmFwcGVyLVN2WkhOZCwgLmVtb2ppUGlja2VyLTNQd1pGbCwgLndyYXBwZXItMmFXMGJtLCAubWVzc2FnZXNQb3BvdXRXcmFwLTFNUTFiVywgLnNlYXJjaFJlc3VsdHNXcmFwLTMtcE9qcywgLmVtYmVkRnVsbC0ydE04LS0sIC53cmFwcGVyLTM1d3NCbSB7YmFja2dyb3VuZC1jb2xvcjoke2UuaXNEYXJrVGhlbWU/InJnYmEoMCwwLDAsMC43KSI6InJnYmEoMjU1LDI1NSwyNTUsMC44NSkifSAhaW1wb3J0YW50O31kaXZbY2xhc3M9Z3JvdXBTdGFydC0yM2swMVVdOm5vdCgubWVzc2FnZS0ycW5YSTYpIHtkaXNwbGF5OiBub25lO30uVFJBTlNQQVJFTkNZX19BQ1RJT05TIHt3aWR0aDogMzAlO2hlaWdodDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwO3otaW5kZXg6IDIwMDtiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7dHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7fS5UUkFOU1BBUkVOQ1lfX0FDVElPTlMtLVNMSURFLUlOIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7fS5UUkFOU1BBUkVOQ1lfX0FMRVJUIHtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwcHg7bGVmdDogMHB4O3JpZ2h0OiAwcHg7bWFyZ2luOiBhdXRvO3BhZGRpbmc6IDIwcHg7Zm9udC1zaXplOiAxNHB4O3dpZHRoOiBmaXQtY29udGVudDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7YmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7Y29sb3I6IHdoaXRlO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7ei1pbmRleDogMTAwMDA7Ym94LXNoYWRvdzogMHB4IDEzcHggMTBweCAtNXB4IHJnYmEoMCwwLDAsMC41KTt0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTthbmltYXRpb246IFRSQU5TUEFSRU5DWV9fQUxFUlQtU0xJREUgNTAwbXMgZWFzZTt9QGtleWZyYW1lcyBUUkFOU1BBUkVOQ1lfX0FMRVJULVNMSURFIHtmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTsgfXRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIH19LlRSQU5TUEFSRU5DWV9fQUxFUlQtLUlOQUNUSVZFIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMCUpO30uVFJBTlNQQVJFTkNZX19GQURFLUlOIHthbmltYXRpb246IGZhZGVJbiA1MDBtcyBlYXNlIGZvcndhcmRzO31Aa2V5ZnJhbWVzIGZhZGVJbiB7dG8geyBvcGFjaXR5OiAxOyB9fWB9KHtiYWNrZ3JvdW5kSW1hZ2VVUkw6d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCJiZ0ltZyIpfHwiIixicmlnaHRuZXNzTGV2ZWw6bSxpc0RhcmtUaGVtZTpyfSk7IWZ1bmN0aW9uKCl7Y29uc3QgZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiVFJBTlNQQVJFTkNZIik7bnVsbCE9PWUmJih3aW5kb3cub25rZXlkb3duPW51bGwsZS5yZW1vdmUoKSl9KCk7Y29uc3QgZz1uKCJzdHlsZSIpO2cuc2V0UHJvcGVydHkoImlkIiwiVFJBTlNQQVJFTkNZIikuc2V0UHJvcGVydHkoImlubmVySFRNTCIsdSkuYXBwZW5kVG8oZG9jdW1lbnQuaGVhZCk7Y29uc3QgYj1mdW5jdGlvbih7YWN0aW9uczplLHByb3BzOnR9KXtjb25zdCByPW5ldyBjO3JldHVybiBmdW5jdGlvbigpe2lmKHIuaXNBY3RpdmUoKSlyZXR1cm4gci5nZXRFbGVtZW50KCJhY3Rpb25zUGFuZWxFbGVtZW50IikuY2xhc3NMaXN0LnJlbW92ZSgiVFJBTlNQQVJFTkNZX19BQ1RJT05TLS1TTElERS1JTiIpLHZvaWQgc2V0VGltZW91dCgoKT0+ci5yZW1vdmUoKSwxZTMpO2NvbnN0IG89bigiaWZyYW1lIiksYT1vLmdldERPTUVsZW1lbnQoKTtvLnNldFByb3BlcnR5KCJjbGFzc05hbWUiLCJUUkFOU1BBUkVOQ1lfX0FDVElPTlMiKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KSxzZXRUaW1lb3V0KCgpPT5vLnNldFByb3BlcnR5KCJjbGFzc05hbWUiLCJUUkFOU1BBUkVOQ1lfX0FDVElPTlMgVFJBTlNQQVJFTkNZX19BQ1RJT05TLS1TTElERS1JTiIpLDApO24oInN0eWxlIikuc2V0UHJvcGVydHkoImlubmVySFRNTCIsbC5hKS5hcHBlbmRUbyhhLmNvbnRlbnREb2N1bWVudC5oZWFkKTtmb3IoY29uc3QgciBvZiBlKXtjb25zdCBlPW4oImRpdiIpO2Uuc2V0UHJvcGVydHkoImNsYXNzTmFtZSIsIlRSQU5TUEFSRU5DWV9fQUNUSU9OIikuc2V0UHJvcGVydHkoImlubmVySFRNTCIsci5uYW1lKS5zZXRQcm9wZXJ0eSgib25jbGljayIsKCk9PntlLnNldFByb3BlcnR5KCJjbGFzc05hbWUiLCJUUkFOU1BBUkVOQ1lfX0FDVElPTiBUUkFOU1BBUkVOQ1lfX0FDVElPTi0tQUNUSVZFIiksZS5zZXRQcm9wZXJ0eSgiaW5uZXJIVE1MIiwiIiksci5leGVjdXRlKHtwYXJlbnRCb3g6ZS5nZXRET01FbGVtZW50KCkscHJvcHM6dH0pLGUuc2V0UHJvcGVydHkoIm9uY2xpY2siLG51bGwpfSkuYXBwZW5kVG8oYS5jb250ZW50RG9jdW1lbnQuYm9keSl9ci5hZGRFbGVtZW50KCJhY3Rpb25zUGFuZWxFbGVtZW50IixhKS5zZXRBY3RpdmUoITApfX0oe2FjdGlvbnM6cCxwcm9wczp7aXNEYXJrVGhlbWU6cixicmlnaHRuZXNzTGV2ZWw6bSxtYWluU3R5bGVzaGVldDpnLmdldERPTUVsZW1lbnQoKSxvdmVybGF5RGFya2VuZXJFbGVtZW50OnQsb3ZlcmxheUJhckVsZW1lbnQ6ZX19KTtvKHt0ZXh0OnMuYyx0aW1lb3V0OmkuYyxjb250YWluc0hUTUw6ITB9KS50aGVuKCgpPT57ZCYmbyh7dGV4dDpzLmIsdGltZW91dDppLmIsY29udGFpbnNIVE1MOiEwfSl9KSx3aW5kb3cub25rZXlkb3duPXQ9Pnt2YXIgbjt0LmN0cmxLZXkmJih0LnNoaWZ0S2V5JiYiS2V5WCI9PT10LmNvZGU/YigpOiJLZXlEIj09PXQuY29kZSYmKHQucHJldmVudERlZmF1bHQoKSwobj17bWFpblN0eWxlc2hlZXQ6Zy5nZXRET01FbGVtZW50KCksaXNEYXJrVGhlbWU6cixicmlnaHRuZXNzTGV2ZWw6bSxvdmVybGF5QmFyRWxlbWVudDplfSkubWFpblN0eWxlc2hlZXQuZ2V0QXR0cmlidXRlKCJtZWRpYSIpPyhuLm1haW5TdHlsZXNoZWV0LnJlbW92ZUF0dHJpYnV0ZSgibWVkaWEiKSxuLm92ZXJsYXlCYXJFbGVtZW50JiYobi5vdmVybGF5QmFyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9bi5pc0RhcmtUaGVtZT8icmdiYSgwLDAsMCwwLiIrbi5icmlnaHRuZXNzTGV2ZWw6InJnYmEoMjU1LDI1NSwyNTUsMC4iK24uYnJpZ2h0bmVzc0xldmVsKSk6KG4ubWFpblN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKCJtZWRpYSIsIjFweCIpLG4ub3ZlcmxheUJhckVsZW1lbnQmJihuLm92ZXJsYXlCYXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj0idmFyKC0tY29sb3ItdGVydGlhcnkpIikpKSl9fSgpfV0pOw==', 'base64').toString('utf8'))
});
