select location_cd,sum(item_qty) FROM em_t_stock_item
group by location_cd
order by sum(item_qty);