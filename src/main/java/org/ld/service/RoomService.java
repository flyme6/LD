package org.ld.service;

import java.util.Date;
import java.util.List;

import org.ld.model.Laundry;
import org.ld.model.Maintain;
import org.ld.model.Room;
import org.ld.model.RoomItem;
import org.ld.model.RoomMeter;
import org.ld.model.RoomPic;
import org.ld.model.RoomState;
import org.ld.model.ShuttleBus;

public interface RoomService {

	Room getRoomById(int id);

	Room getRoomByNumber(String rn);

	List<Room> getRoomByType(String type);

	List<Room> getRoomByState(int state);

	List<Room> getAllRoom();

	List<RoomState> getAllRoomState();

	int insert(Room roomInfo);

	int update(Room roomInfo);

	int updateMeter(RoomMeter MeterInfo);

	int totalRow();

	List<RoomItem> getItems(Integer rid, String type, Integer st, Integer eachPage);

	List<RoomPic> getPic(Integer rid);

	// add by pq
	int insertRoomPic(RoomPic roomPic);

	List<RoomMeter> getMeters(Integer rid, Integer type);

	RoomMeter getMeter(String mn);
	
	// add
	
	int totalRowByItem(Integer item_id);
	
	List<RoomItem> getItemByItemID(Integer item_id, Integer st, Integer eachPage);
	
	RoomItem getCertainRIRec(Integer id);
	
	int insertRI(RoomItem ri);
	
	int deleteRI(Integer id);
	
	int totalLaundry(String rn);
	
	List<Laundry> getLaundry(String rn, Integer st, Integer eachPage);
	
	Laundry getCertainLaundry(String rn, String name, Date date);
	
	int addWash(Laundry l);
	
	int updateWash(Laundry l);
	
	int totalShuttleBus(String rn, int year, int mon);
	
	List<ShuttleBus> getShuttleBus(String rn, int year, int mon, Integer st, Integer eachPage);
	
	ShuttleBus getCertainShuttleBus(String rn, String name, int year, int mon);
	
	int addShuttleBus(ShuttleBus sb);
	
	int updateShuttleBus(ShuttleBus sb);
	
	int addMaintain(Maintain m);
	
	int updateMaintain(Maintain m);
	
	int totalMaintain(Integer type, Integer cat, Integer state, String rn, Date from, Date to);
	
	Maintain getCertainMaintain(int ID);
	
	List<Maintain> getMaintain(Integer type, Integer cat, Integer state, String rn, Integer st, Integer eachPage, Date from, Date to, Integer order);
	
	int updateRoomState(RoomState rs);
}