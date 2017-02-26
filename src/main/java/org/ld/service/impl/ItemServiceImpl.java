package org.ld.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.ld.dao.DailyServiceMapper;
import org.ld.dao.FacStaMapper;
import org.ld.dao.GroceryItemMapper;
import org.ld.dao.GroceryRunningMapper;
import org.ld.dao.PlanDetailMapper;
import org.ld.dao.PlanMapper;
import org.ld.dao.PlanProgressMapper;
import org.ld.dao.RoomItemMapper;
import org.ld.dao.SourcesMapper;
import org.ld.model.DailyService;
import org.ld.model.FacSta;
import org.ld.model.GroceryItem;
import org.ld.model.GroceryRunning;
import org.ld.model.Plan;
import org.ld.model.PlanDetail;
import org.ld.model.PlanProgress;
import org.ld.model.RoomItem;
import org.ld.model.Sources;
import org.ld.model.User;
import org.ld.service.ItemService;
import org.ld.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/* 用户service实现类  */
@Service("itemService")
public class ItemServiceImpl implements ItemService {

	private static Logger logger = Logger.getLogger("logDev");

	@Autowired
	private DailyServiceMapper dailyServiceMapper;

	@Autowired
	private FacStaMapper facStaMapper;

	@Autowired
	private RoomItemMapper roomItemMapper;

	@Autowired
	private PlanMapper planMapper;

	@Autowired
	private PlanDetailMapper planDetailMapper;
	
	@Autowired
	private PlanProgressMapper planProgressMapper;
	
	@Autowired
	private GroceryItemMapper groceryItemMapper;
	
	@Autowired
	private GroceryRunningMapper groceryRunningMapper;

	@Override
	public List<RoomItem> getItems(Integer rid, String type, Integer st, Integer eachPage) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ST", st);
		map.put("EACH", eachPage);
		if (rid == 0 && type == null) {
			return roomItemMapper.getAllItems(map);
		} else if (rid != 0 && type != null) {
			map.put("ROOM_ID", rid);
			map.put("TYPE", type);
			return roomItemMapper.getItems(map);
		} else if (rid != 0) {
			map.put("ROOM_ID", rid);
			return roomItemMapper.getItemsByRoom(map);
		} else {
			map.put("TYPE", type);
			return roomItemMapper.getItemsByType(map);
		}
	}

	// 获取房间物品总数
	@Override
	public int getTotal(String type, String cat, String band) {
		// TODO Auto-generated method stub

		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("TYPE", type);
		map.put("CAT", cat);
		map.put("BAND", band);

		if (type == null)
			return facStaMapper.getAllTotal();
		else {
			if (cat == null && band == null)
				return facStaMapper.getTotalByType(map);
			else if (cat != null && band == null)
				return facStaMapper.getTotalByTypeCat(map);
			else
				return facStaMapper.getTotalByTypeCatBand(map);
		}
	}

	// 获取所有采购计划
	@Override
	public List<Plan> getPlans(Integer st, Integer eachPage) {
		// TODO Auto-generated method stub
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		map.put("ST", st);
		map.put("EACH", eachPage);
		return planMapper.getPlans(map);
	}

	// 根据采购计划ID获取采购计划(add by pq)
	@Override
	public Plan searchPlanByPlanid(Integer plan_id) {
		return planMapper.selectByPrimaryKey(plan_id);
	}

	// 获取采购计划总数
	@Override
	public int getTotalPlan() {
		// TODO Auto-generated method stub
		return planMapper.getTotal();
	}

	@Override
	public int addNewPlan(Plan p) {
		// TODO Auto-generated method stub
		try {
			planMapper.insert(p);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}
	
	@Override
	public int updatePlan(Plan p) {

		try {
			planMapper.updateByPrimaryKeySelective(p);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public int addNewPlanDetail(PlanDetail d) {
		// TODO Auto-generated method stub
		try {
			planDetailMapper.insert(d);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public Plan getPlanByName(String s) {
		// TODO Auto-generated method stub
		return planMapper.selectByName(s);
	}

	@Override
	public int addNewFac(FacSta f) {
		// TODO Auto-generated method stub
		try {
			facStaMapper.insert(f);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public List<FacSta> getFacByTypeCatBand(String type, String cat, String band, int st, int eachPage) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("TYPE", type);
		map.put("CAT", cat);
		map.put("BAND", band);
		map.put("ST", st);
		map.put("EACH", eachPage);

		if (type == null)
			return facStaMapper.getAllFac(map);
		else {
			if (cat == null && band == null)
				return facStaMapper.getFacByType(map);
			else if (cat != null && band == null)
				return facStaMapper.getFacByTypeCat(map);
			else
				return facStaMapper.getFacByTypeCatBand(map);
		}
	}

	@Override
	public FacSta getFac(Integer id) {
		// TODO Auto-generated method stub
		return facStaMapper.selectByPrimaryKey(id);
	}

	@Override
	public FacSta getFacByNumber(String no) {
		// TODO Auto-generated method stub
		return facStaMapper.selectByNumber(no);
	}

	@Override
	public List<FacSta> getFacByTypeCatBandAll(String type, String cat, String band) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("TYPE", type);
		map.put("CAT", cat);
		map.put("BAND", band);
		return facStaMapper.getFacByTypeCatBandAll(map);
	}

	@Override
	public int getTotalPlanDetail(int pid) {
		// TODO Auto-generated method stub
		
		return planDetailMapper.getTotalByPlanId(pid);
	}

	@Override
	public List<PlanDetail> getPlanDetails(int pid, int st, int eachPage) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("PID", pid);
		map.put("ST", st);
		map.put("EACH", eachPage);
		return planDetailMapper.getPlanDetails(map);
	}

	@Override
	public int getTotalPlanProgress(int pid) {
		// TODO Auto-generated method stub
		return planProgressMapper.getTotalByPlanId(pid);
	}

	@Override
	public List<PlanProgress> getPlanProgresses(int pid, int st, int eachPage) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("PID", pid);
		map.put("ST", st);
		map.put("EACH", eachPage);
		return planProgressMapper.getPlanProgresses(map);
	}

	@Override
	public int updatePlanDetain(PlanDetail d) {
		// TODO Auto-generated method stub
		try {
			planDetailMapper.updateByPrimaryKeySelective(d);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public int addNewPlanProgress(PlanProgress pg) {
		// TODO Auto-generated method stub
		try {
			planProgressMapper.insert(pg);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public PlanDetail getPlanDetailByID(int id) {
		// TODO Auto-generated method stub
		return planDetailMapper.selectByPrimaryKey(id);
	}

	@Override
	public int updateFac(FacSta fs) {
		// TODO Auto-generated method stub
		try {
			facStaMapper.updateByPrimaryKeySelective(fs);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public int totalItemByRoomType(int rid, String type) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ROOM_ID", rid);
		map.put("TYPE", type);
		return roomItemMapper.getTotal(map);
	}

	@Override
	public int totalGrocery(String goods) {
		// TODO Auto-generated method stub
		return groceryItemMapper.totalRec(goods);
	}

	@Override
	public List<GroceryItem> getGrocery(String goods, int st, int eachPage) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("NAME", goods);
		map.put("ST", st);
		map.put("EACH", eachPage);
		return groceryItemMapper.getRec(map);
	}

	@Override
	public int addGrocery(GroceryItem goods) {
		// TODO Auto-generated method stub
		try {
			groceryItemMapper.insert(goods);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public int addGroceryRec(GroceryRunning gr) {
		// TODO Auto-generated method stub
		try {
			groceryRunningMapper.insert(gr);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public int updateGrocery(GroceryItem goods) {
		// TODO Auto-generated method stub
		try {
			groceryItemMapper.updateByPrimaryKeySelective(goods);
			return 1;
		} catch (Exception e) {
			logger.error(e.getCause());
			return 0;
		}
	}

	@Override
	public GroceryItem getCertainGrocery(int ID) {
		// TODO Auto-generated method stub
		return groceryItemMapper.selectByPrimaryKey(ID);
	}
	
	@Override
	public List<GroceryRunning> getGroceryRunning(int id, int st, int eachPage, Date from, Date to) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ID", id);
		map.put("ST", st);
		map.put("EACH", eachPage);
		map.put("FTIME", from);
		map.put("TTIME", to);
		
		return groceryRunningMapper.getRec(map);
	}
	
	@Override
	public int totalGroceryRunning(int id, Date from, Date to) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ID", id);
		map.put("FTIME", from);
		map.put("TTIME", to);
		
		return groceryRunningMapper.totalRec(map);
	}
}